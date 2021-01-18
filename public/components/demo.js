var video1Complete = false;
var video2Complete = false
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');


video1.addEventListener('ended', function () {
    video1Complete = true;
    if (video2Complete == true) {
        video1.play();
        video2.play();
    }
  })

video2.addEventListener('ended', function () {
    video2Complete = true;
  })

//   if (video1Complete == true && video2Complete == true) {
//     document.querySelector('#video2').play();
//     document.querySelector('#video1').play();
//     console.count('loop restart');
//     video1Complete = false;
//     video2Complete = false
//   }