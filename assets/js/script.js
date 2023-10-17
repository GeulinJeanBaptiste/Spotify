import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
// console.dir(catalogue);
let currentTrack = 0;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-Pause");
// Clic sur le boutton next.
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider(catalogue, currentTrack, "next");
  console.log(currentTrack);
});
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider(catalogue, currentTrack, "prev");

  console.log(currentTrack);
});
// Actions sur le bouton play-pause
playPause.addEventListener("click", () =>{
  
})
slider(catalogue, currentTrack);
audio(catalogue, currentTrack);
