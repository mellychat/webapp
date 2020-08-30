let openMediaBtn = document.querySelector("#openMedia");
let localVideo = document.querySelector("#localVideo");

async function openMedia (){
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  });
  localVideo.srcObject = stream;
}


openMediaBtn.addEventListener("click", openMedia);

