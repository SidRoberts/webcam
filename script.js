var video = document.querySelector("#webcam")

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (e) {
      console.log("Failed to display webcam.")
    })
} else {
  console.log("Failed to find webcam.");
}

$("#requestFullscreen").click(
  function () {
    video.requestFullscreen();
  }
)
