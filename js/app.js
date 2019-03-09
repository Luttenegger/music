var app = angular.module("myapp", []).config(function($sceProvider) {
    $sceProvider.enabled(false);
 });
         
app.controller("MusicController", function($scope, $sce) {
  $scope.videosTime = null;
  $scope.musicTime = null;
  $scope.videos =[
    {
      "url":"https://www.youtube.com/embed/4ZHwu0uut3k",
      "title":"song1",
      "time": "2:30"
    },
    {
      "url":"https://www.youtube.com/watch?v=4ZHwu0uut3k",
      "title":"song2",
      "time": "3:10"
    },
    ];
     $scope.playlist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_2",
    cssSelectorAncestor: "#jp_container_2"
  }, [
    {
      title:"Cro Magnon Man",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      "time": "2:51"
    },
    {
      title:"Your Face",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
      "time": "2:51"
    },
    {
      title:"Cyber Sonnet",
      mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
      oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
      "time": "2:51"
    },
    {
      title:"Tempered Song",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
      "time": "2:51"
    },
    {
      title:"Hidden",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      "time": "2:51"
    },
    {
      title:"Lentement",
      free:true,
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
      "time": "2:51"
    },
    {
      title:"Lismore",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg",
      "time": "2:51"
    },
    {
      title:"The Separation",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg",
      "time": "2:51"
    },
    {
      title:"Beside Me",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-06-Beside-me.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-06-Beside-me.ogg",
      "time": "2:51"
    },
    {
      title:"Bubble",
      free:true,
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
      "time": "2:51"
    },
    {
      title:"Stirring of a Fool",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-08-Stirring-of-a-fool.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-08-Stirring-of-a-fool.ogg",
      "time": "2:51"
    },
    {
      title:"Partir",
      free: true,
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-09-Partir.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-09-Partir.ogg",
      "time": "2:51"
    },
    {
      title:"Thin Ice",
      mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
      oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg",
      "time": "2:51"
    }
  ], {
    swfPath: "../../dist/jplayer",
    supplied: "oga, mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });


  $scope.formatData = function () {
    var videoTotal = 0;
    var musicTotal = 0;
    //Removes the colon in the time string and creates an array for each number 
    $.each($scope.videos, function(i,video) {
      var time = video.time.split(":");
      var currentTime = video.time;
      //For each number in the array, get the seconds and add it to the videoTotal 
      $.each(time, function(i, timeframe) {
        var minutes = 0;
        var seconds = 0;
        if (i == 0) {
          minutes = parseInt(timeframe) * 60; //converts string to int
          videoTotal = videoTotal + minutes; //add parsed int to videoTotal
        }
        else {
          seconds = parseInt(timeframe); //converts string to int
          videoTotal = videoTotal + seconds; //add parsed int to totalTime
        }
      })
      video.url = video.url.replace("watch?v=", "embed/"); //converts url to readable format for angular
    })
    $.each($scope.playlist.playlist, function(i,song) {
      var time = song.time.split(":");
      var currentTime = song.time;
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
    //Calculates all the added seconds into a time code format
    var vh = Math.floor(videoTotal/3600); //Get whole hours
    var vm = Math.floor(videoTotal/60); //Get remaining minutes
    videoTotal -= vh*3600;
    videoTotal -= vm*60;
    $scope.videosTime = vh+":"+(vm < 10 ? '0'+vm : vm)+":"+(videoTotal < 10 ? '0'+videoTotal : videoTotal);

    var mh = Math.floor(musicTotal/3600); //Get whole hours
    var mm = Math.floor(musicTotal/60); //Get remaining minutes
    musicTotal -= mh*3600;
    musicTotal -= mm*60;
    $scope.musicTime = mh+":"+(mm < 10 ? '0'+mm : mm)+":"+(musicTotal < 10 ? '0'+musicTotal : musicTotal);
    }
});

//]]>