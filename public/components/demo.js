var video1Complete = false;
var video2Complete = false;
var video1ReadyToStart = false;
var video2ReadyToStart = false;
var videosArePlaying = false;
var videosHaveRestarted = false;
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');

video1.addEventListener('canplaythrough', (event) => {
 video1ReadyToStart = true;
 videosHaveRestarted = false;

      //Checks to see if both videos are ready to start before startning them
      if (video2ReadyToStart == true && videosArePlaying == false) {
        videosArePlaying = true;
        video1.play();
        video2.play();
    }
});

video2.addEventListener('canplaythrough', (event) => {
  console.log("I ran again");
  video2ReadyToStart = true;
  videosHaveRestarted = false;

    //Checks to see if both videos are ready to start before starting them
    if (video1ReadyToStart == true && videosArePlaying == false) {
      videosArePlaying = true;
      video1.play();
      video2.play();
  }
});


//Checks to see if the left-hand video has finished
video1.addEventListener('ended', function () {
    video1Complete = true;
    videosArePlaying = false;

    //Checks to see if both videos are finished before reseting both videos
    if (video2Complete == true && videosHaveRestarted == false) {
        videosHaveRestarted = true;
        video1.play();
        video2.play();
    }
  })

//Checks to see if the right-hand video has finished
video2.addEventListener('ended', function () {
    //Signals that the video is completed
    video2Complete = true;
    videosArePlaying = false;

    //Checks to see if both videos are finished before reseting both videos
    if (video1Complete == true && videosHaveRestarted == false) {
      videosHaveRestarted = true;
      video1.play();
      video2.play();
  }
  })

// Doing it this way, you have a lot of issues with how things are being loaded. Talk to Coach Lilly on how to better implement.