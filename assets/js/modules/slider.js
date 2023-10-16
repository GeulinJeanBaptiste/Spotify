const slider = (catalogue, currentTrack) => {
  console.log("initialisation du slider");
  //   console.dir(catalogue);
  //   console.log(catalogue[0].cover);
  const sliderHTML = document.querySelector("#slider");
  const coverUrl = "./assets/img/covers/";
  const coversSlider = document.createElement("img");
  coversSlider.src = coverUrl + catalogue[currentTrack].cover;
  
  //   prepend insert un element après ceux qui existent déjà dans le parent.
  //   sliderHTML.prepend(coversSlider);
  //   append insert un element après ceux qui existent déjà dans le parent.
  sliderHTML.append(coversSlider);
};
export { slider };
