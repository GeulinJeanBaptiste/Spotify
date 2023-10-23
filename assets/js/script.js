import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-Pause");
const subTime = document.querySelector("#subTime");
globalThis.sliderHTML = document.querySelector("#slider");
const mc = new Hammer(sliderHTML);
const mcBody = new Hammer(document.body, { direction: Hammer.DIRECTION_ALL });
const mcTime = new Hammer(subTime, { direction: Hammer.DIRECTION_ALL });
mcTime.on("panright", () => {
  if (track.currentTime < track.duration) {
    track.duration += 1;
  }
  // console.log(track.volume);
});
mcTime.on("panleft", () => {
  if (track.currentTime > track.duration) {
    track.duration -= 1;
  }
  // console.log(track.volume);
});
mcBody.on("pan up", () => {
  if (track.volume < 1) {
    track.volume += 0.005;
  }
  // console.log(track.volume);
});
mcBody.on("pan down", () => {
  if (track.volume > 0.005) {
    track.volume -= 0.005;
  }
  // console.log(track.volume);
});
//  globalThis permet de partager une variable ou  une fonction avec tous les modules;
globalThis.catalogue = catalogue;
globalThis.track = null;
globalThis.playlist = playlist;
globalThis.miniPlayPause = (index) => {
  if (currentTrack === index) {
  } else {
    currentTrack = index;
    isPlaying = false;
    audio("pause");
    audio();
    slider("next");
  }
  switchPlayPause();
};
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
// Fonction Boutton Play Pause
const switchPlayPause = () => {
  //  ! Veut dire inverse d'une boolean ex:!isplaying vaut false.
  if (!isPlaying) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
    audio("pause");
  }
  statusBPP();
};
const prevEvents = () => {
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
};
const nextEvents = () => {
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
};
mc.on("swipeleft", nextEvents);
// Clic sur le boutton next.
nextButton.addEventListener("click", nextEvents);

// Swipe Previous
mc.on("swiperight", prevEvents);
prevButton.addEventListener("click", prevEvents);
// Actions sur le bouton play-pause
// Il est affiché en Play et devient Pause quand on clique dessus.
//  Si dans un addEventListener je doit utiliser ma preopre fonction au lieu d'une callback je ne peux alors pas utiliser de parenthèses pour l'appeler.
playPause.addEventListener("click", switchPlayPause);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FOAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FOAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FOAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FOAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* for (let i = 0; i < catalogue.length; i++) {
  const titre = catalogue[i];
  const artiste = catalogue[i].artiste;
  const album = catalogue[i].album;
  const liTitre = document.createElement("li");
  liTitre.appendChild(document.createTextNode(titre.titre));
  playlist.appendChild(liTitre);

  console.log(
    "\nTitre : " + titre + "\nArtiste : " + artiste + "\nAlbum : " + album
  );
} */

slider();
audio();

setInterval(() => {
  let w = (track.currentTime * 100) / track.duration;
  subTime.style.width = w + "%";
}, 500);
playlist();
