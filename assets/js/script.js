import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-Pause");
//  globalThis permet de partager une variable ou  une fonction avec tous les modules;
globalThis.catalogue = catalogue;
globalThis.track = null;
// fonction chargée de gérer l'état de mon boutton Play/Pause.
const statusBPP = () => {
  if (isPlaying) {
    playPause.textContent = "Pause";
    // audio("play");
  } else {
    playPause.textContent = "Play";
    // audio("pause");
  }
};
// Clic sur le boutton next.
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  // j'arrete la lecture en cours
  audio("pause");
  // je reinitialise track avec la nouvelle valeur de currentTrack
  audio();
  // Je relance la lecture
  audio("play");
  isPlaying = true;
  statusBPP();
  // console.log(currentTrack);
});
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  // j'arrete la lecture en cours
  audio("pause");
  // je reinitialise track avec la nouvelle valeur de currentTrack
  audio();
  // Je relance la lecture
  audio("play");
  isPlaying = true;
  statusBPP();
  // console.log(currentTrack);
});
// Actions sur le bouton play-pause
// Il est affiché en Play et devient Pause quand on clique dessus.
playPause.addEventListener("click", () => {
  //  ! Veut dire inverse d'une boolean ex:!isplaying vaut false.
  if (!isPlaying) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
    audio("pause");
  }
  statusBPP();
});
slider();
audio();

// console.dir(catalogue);
