/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Featured Album Player
6. InitMagic
7. Init Single Player


******************************/

$(document).ready(function()
{
	$("nav a, footer a[href='#main']").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
	
		  // Prevent default anchor click behavior
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;
	
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 900, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });

	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();

	initMenu();
	initHomeSlider();
	initAlbumPlayer();
	initMagic();
	initSinglePlayer();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var hamb = $('.hamburger');
			var menu = $('.menu');
			var menuOverlay = $('.menu_overlay');

			hamb.on('click', function()
			{
				menu.addClass('active');
			});

			menuOverlay.on('click', function()
			{
				menu.removeClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				animateOut: 'fadeOutLeft',
    			animateIn: 'fadeInRight',
				items:1,
				loop:true,
				autoplay:false,
				autoplayTimeout:8000,
				smartSpeed:1200,
				autoplaySpeed:1200,
				dotsSpeed:1200,
				mouseDrag:false,
				nav:false,
				dots:true,
				margin:250
			});
		}
	}

	/* 

	5. Init Featured Album Player

	*/

	function initAlbumPlayer()
	{
		if($('#jplayer_1').length)
		{
			// Duration has to be entered manually
			var playlist = 
			[
				{
					title:"You don’t really love me",
					artist:"Moosic",
					mp3:"files/bensound-betterdays.mp3",
					duration:"3.50"
				},
				{
					title:"So done with you",
					artist:"Moosic",
					mp3:"files/bensound-dubstep.mp3",
					duration:"4.23"
				},
				{
					title:"I actually still love you",
					artist:"Moosic",
					mp3:"files/bensound-sunny.mp3",
					duration:"3.57"
				},
				{
					title:"Call me back please",
					artist:"Moosic",
					mp3:"files/bensound-betterdays.mp3",
					duration:"5.08"
				},
				{
					title:"Bye baby bye",
					artist:"Moosic",
					mp3:"files/bensound-dubstep.mp3",
					duration:"3.15"
				},
				{
					title:"We togethery",
					artist:"Moosic",
					mp3:"files/bensound-sunny.mp3",
					duration:"3.46"
				},
				{
					title:"Together Forever",
					artist:"Moosic",
					mp3:"files/bensound-dubstep.mp3",
					duration:"4.05"
				},
			];
			$( "div.music-container" ).html(function() {
				var musicTotal = 0;
				var musicTime = null;
			    $.each(playlist, function(i,song) {
			      var time = song.duration.split(".");
			      //For each number in the array, get the seconds and add it to the musicTotal 
			      $.each(time, function(i, timeframe) {
			        var minutes = 0;
			        var seconds = 0;
			        if (i == 0) {
			          minutes = parseInt(timeframe) * 60; //converts string to int
			          musicTotal = musicTotal + minutes; //add parsed int to musicTotal
			        }
			        else {
			          seconds = parseInt(timeframe); //converts string to int
			          musicTotal = musicTotal + seconds; //add parsed int to musicTotal
			        }
			      })
				})
			    var mh = Math.floor(musicTotal/3600); //Get whole hours
			    var mm = Math.floor(musicTotal/60); //Get remaining minutes
			    musicTotal -= mh*3600;
			    musicTotal -= mm*60;
				musicTime = mh+":"+(mm < 10 ? '0'+mm : mm)+":"+(musicTotal < 10 ? '0'+musicTotal : musicTotal);
				return "Total Time: " + musicTime.substring(2,7);
				});

			var options =
			{
				playlistOptions:
				{
					autoPlay:false,
					enableRemoveControls:false
				},
				play: function() // To avoid multiple jPlayers playing together.
				{ 
					$(this).jPlayer("pauseOthers");
				},
				solution: 'html',
				supplied: 'oga, mp3',
				useStateClassSkin: true,
				preload: 'metadata',
				volume: 0.2,
				muted: false,
				backgroundColor: '#000000',
				cssSelectorAncestor: '#jp_container_1',
				errorAlerts: false,
				warningAlerts: false
			};

			var cssSel = 
			{
				jPlayer: "#jplayer_1",
				cssSelectorAncestor: "#jp_container_1",
				play: '.jp-play',
				pause: '.jp-pause',
				stop: '.jp-stop',
				seekBar: '.jp-seek-bar',
				playBar: '.jp-play-bar',
				globalVolume: true,
				mute: '.jp-mute',
				unmute: '.jp-unmute',
				volumeBar: '.jp-volume-bar',
				volumeBarValue: '.jp-volume-bar-value',
				volumeMax: '.jp-volume-max',
				playbackRateBar: '.jp-playback-rate-bar',
				playbackRateBarValue: '.jp-playback-rate-bar-value',
				currentTime: '.jp-current-time',
				duration: '.jp-duration',
				title: '.jp-title',
				fullScreen: '.jp-full-screen',
				restoreScreen: '.jp-restore-screen',
				repeat: '.jp-repeat',
				repeatOff: '.jp-repeat-off',
				gui: '.jp-gui',
				noSolution: '.jp-no-solution'
			};

			var myPlaylist = new jPlayerPlaylist(cssSel,playlist,options);
			
			
			setTimeout(function()
			{
				var items = $('.jp-playlist ul li > div');
				for(var x = 0; x < items.length; x++)
				{
					var item = items[x];
					var dur = playlist[x].duration;
					var durationDiv = document.createElement('div');
					durationDiv.className = "song_duration";
					durationDiv.append(dur);
					item.append(durationDiv);
				}
			},200);
		}
	}

	/* 

	6. Init Magic

	*/

	function initMagic()
	{
		if($('.image_overlay').length)
		{
			var eles = $('.image_overlay');
			eles.each(function()
			{
				var ele = this;

				var projectScene = new ScrollMagic.Scene(
				{
					triggerElement: ele,
			        triggerHook: "onEnter",
			        offset: 400,
			        reverse:false
				})
				.setClassToggle(ele, 'active')
				.addTo(ctrl);
			});
		}
	}

	/* 

	7. Init Single Player

	*/

	function initSinglePlayer()
	{
		if($("#jplayer_2").length)
		{
			$("#jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title:"Better Days",
					artist:"Bensound",
					mp3:"files/bensound-betterdays.mp3"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "plugins/jPlayer",
		supplied: "mp3",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		solution: 'html',
		preload: 'metadata',
		volume: 0.2,
		muted: false,
		backgroundColor: '#000000',
		errorAlerts: false,
		warningAlerts: false
	});
		}	
	}

});