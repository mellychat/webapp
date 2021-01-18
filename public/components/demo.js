var video1Complete = false;
var video2Complete = false
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');

//Checks to see if the left-hand video has finished
video1.addEventListener('ended', function () {
    video1Complete = true;
    //Checks to see if both videos are finished before reseting both videos
    if (video2Complete == true) {
        video1.play();
        video2.play();
    }
  })
//Checks to see if the right-hand video has finished
video2.addEventListener('ended', function () {
    //Signals that the video is completed
    video2Complete = true;
  })
