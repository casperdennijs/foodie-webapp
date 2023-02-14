const scanButton = document.querySelector(".scanner")
const scanSection = document.querySelector("section.scannen")
const video = document.querySelector("#video")
console.log(scanButton)

/* if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  const constraints = { 
    video: true,
    audio: false
  }
  
  navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
} *.

/* scanButton.addEventListener('click', () => {
    console.log("test");
    scanSection.classList.toggle("enable");
}) */