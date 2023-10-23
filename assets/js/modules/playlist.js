/* const playlist = () => {
  const playlistDiv = document.querySelector("#playlist");
  let playlistHTML = `<ul>
`;
  catalogue.forEach((element) => {
    // console.dir(element);
    playlistHTML += `<li class="item">
      <div class="itemImg">
      <img src="./assets/img/covers/${element.cover}" alt="${element.titre}" />
      </div>
    <p>${element.titre}</p>
    <p>${element.artiste}</p>
    <p>${element.annee}</p>
    <div><i>like</i></div>
    <div><i>play</i></div>
    </li>`;
  });
  playlistHTML += `</ul>`;
  playlistDiv.innerHTML = playlistHTML;
}; */
const playlist = () => {
  const playlistDiv = document.querySelector("#playlist");
  //   plan B creatHelement
  const ul = document.createElement("ul");
  playlistDiv.append(ul);
  catalogue.forEach((element, index) => {
    const li = document.createElement("li");
    li.classList.add("item");
    ul.append(li);
    const img = document.createElement("img");
    img.src = "./assets/img/covers/" + element.cover;
    img.alt = element.titre;
    img.classList.add("itemImg");
    li.append(img);
    const pTitre = document.createElement("p");
    pTitre.textContent = element.titre;
    li.append(pTitre);
    const pArtiste = document.createElement("p");
    pArtiste.textContent = element.artiste;
    li.append(pArtiste);
    const pAnnee = document.createElement("p");
    pAnnee.textContent = element.annee;
    li.append(pAnnee);

    const pHeart = document.createElement("p");
    li.append(pHeart);

    const iHeart = document.createElement("i");
    iHeart.classList.add("fa-regular", "fa-heart");
    pHeart.append(iHeart);

    pHeart.addEventListener("click", () => {
      iHeart.classList.toggle("fa-regular");
      iHeart.classList.toggle("fa-solid");
      catalogue[index].like = !element.like;
      console.dir(catalogue);
    });

    const pPlaypause = document.createElement("p");
    li.append(pPlaypause);
    const iPlaypause = document.createElement("i");
    iPlaypause.classList.add("fa-solid", "fa-play");
    pPlaypause.append(iPlaypause);

    pPlaypause.addEventListener("click", () => {
      miniPlayPause(index);
    });
  });
};

export { playlist };
