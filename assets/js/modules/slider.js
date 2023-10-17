const slider = (status = "init") => {
  console.log("initialisation du slider");
  //   console.dir(catalogue);
  //   console.log(catalogue[0].cover);
  const sliderHTML = document.querySelector("#slider");
  const coverUrl = "./assets/img/covers/";

  switch (status) {
    case "init":
      const coversSlider = document.createElement("img");
      coversSlider.src = coverUrl + catalogue[currentTrack].cover;
      coversSlider.id = "coversSlider";
      //   prepend insert un element après ceux qui existent déjà dans le parent.
      //   sliderHTML.prepend(coversSlider);
      //   append insert un element après ceux qui existent déjà dans le parent.
      sliderHTML.append(coversSlider);
      break;
    case "next":
      document.querySelector("#coversSlider").src =
        coverUrl + catalogue[currentTrack].cover;
      break;
    case "prev":
      document.querySelector("#coversSlider").src =
        coverUrl + catalogue[currentTrack].cover;
      break;
    default:
      break;
  }
};
export { slider };
// UL dans html,
