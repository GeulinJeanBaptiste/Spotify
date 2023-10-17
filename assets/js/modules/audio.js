const audio = (status = "init") => {
  const urlAudio = "./assets/audio/";
  // console.dir(track);
  switch (status) {
    case "init":
      track = new Audio(urlAudio + catalogue[currentTrack].audio);
      console.log("initialisation piste audio");
      break;
    case "play":
      track.play();
      break;
    case "pause":
      track.pause();
      break;
    default:
      console.log("erreur dans la fonction audio");
      break;
  }
};
export { audio };
