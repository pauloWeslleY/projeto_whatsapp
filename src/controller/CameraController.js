export class CameraController {
   constructor(videoEl) {
      this._videoEl = videoEl;
      navigator.mediaDevices.getUserMedia({
         video: true
      }).then(stream => {
         let mediaStream = new MediaStream(stream);
         this._videoEl.srcObject = mediaStream;
         this._videoEl.play();
         // NOTE: this._videoEl.src = URL.createObjectURL(stream);
      }).catch(err => {
         console.error(err);
      });
   }
}