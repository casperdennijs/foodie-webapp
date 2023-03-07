const scanSection = document.querySelector("section.scannen")
let cameraStatus = 0;

export function createVideo() {
    if (cameraStatus == 0) {
        const video = document.createElement("video");
        video.setAttribute("id", "video");
        video.autoplay = true;
        scanSection.appendChild(video);
        scanSection.classList.add("enable");
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = { 
                video: true,
                audio: false
            }
            navigator.mediaDevices.getUserMedia(constraints).then(stream => video.srcObject = stream);
        }
        cameraStatus = 1;
    } else {
        const video = document.querySelector("#video");
        stream.stop();
        video.remove();
        scanSection.classList.remove("enable");
        cameraStatus = 0;
    }
}
