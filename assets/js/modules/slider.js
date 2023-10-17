const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/covers/";
const initSlider = () => {
  // Je cree une première image d'arrière plan fixe.
  const coversSlider = document.createElement("img");
  coversSlider.src = coverUrl + catalogue[currentTrack].cover;
  coversSlider.id = "coversSlider";
  sliderHTML.append(coversSlider);
  // Je crée une deuxieme image supperposée destinée à l'effet (transform).
  const imgA = document.createElement("img");
  imgA.src = coverUrl + catalogue[currentTrack].cover;
  imgA.id = "imgA";
  sliderHTML.append(imgA);
};
const nextSlider = () => {
  document.querySelector("#coversSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider", "fadeOut");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#imgA").classList.remove("transSlider", "fadeOut");
  }, 500);
};
const prevSlider = () => {
  document.querySelector("#coversSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider", "fadeOut");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#imgA").classList.remove("transSlider", "fadeOut");
  }, 500);
};

const slider = (status = "init") => {
  console.log("initialisation du slider");
  switch (status) {
    case "init":
      initSlider();
      break;
    case "next":
      nextSlider();
      break;
    case "prev":
      prevSlider();
      break;
    default:
      break;
  }
};
export { slider };
// UL dans html,
