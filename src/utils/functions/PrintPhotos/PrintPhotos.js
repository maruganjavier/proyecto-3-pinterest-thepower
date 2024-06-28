import "./PrintPhotos.css";

import { getRandomNumber } from "../GetRandomNumber/GetRandomNumber";
import { Button } from "../../../components/Button/Button";
import { Users } from "/src/data/Users";
import { getRandomUser } from "../GetRandomUser/GetRandomUser";
import { OpenImageFullScreen } from "../OpenImageFullScreen/OpenImageFullScreen";

export const PrintPhotos = ({ array = "[]" }) => {
  const main = document.createElement("main");
  let section = document.querySelector("#gallery");

  if (!section) {
    section = document.createElement("section");
    section.id = "gallery";
    section.classList.add("masonry-container");
    document.body.append(section);
  }

  section.innerHTML = "";

  array.forEach((photo, index) => {
    const div = document.createElement("div");
    const divPhoto = document.createElement("div");
    const divIconCamera = document.createElement("div");
    const imgIconCamera = document.createElement("img");
    const pIconCamera = document.createElement("p");
    const divIconHeart = document.createElement("div");
    const imgIconHeart = document.createElement("img");
    const pIconHeart = document.createElement("p");
    const img = document.createElement("img");
    const btnVisit = Button({
      text: "Visitar",
      importance: "tertiary-btn",
      link: "#",
      ariaLabel: "Visitar"
    });

    const divUser = document.createElement("div");
    const divImgUser = document.createElement("div");
    const imgUser = document.createElement("img");
    const pUser = document.createElement("p");
    const divShare = document.createElement("div");
    const aImgShare = document.createElement("a");
    const imgShare = document.createElement("img");
    const pDate = document.createElement("p");

    div.classList.add("card");
    divPhoto.classList.add("photo-container");
    divIconCamera.classList.add(
      "icon-camera-container",
      "div-icons-card",
      "flex-container"
    );
    imgIconCamera.src = "./src/assets/icon-camera.svg";
    imgIconCamera.alt = "Más fotos disponibles";
    divIconHeart.classList.add(
      "icon-heart-container",
      "div-icons-card",
      "flex-container"
    );
    imgIconHeart.src = "./src/assets/icon-heart.svg";
    imgIconHeart.alt = "Me gusta";
    pIconCamera.textContent = `+${getRandomNumber({})}`;
    pIconHeart.textContent = getRandomNumber({});
    img.classList.add("photo");
    img.src = photo.urls.regular;
    img.alt = photo.alt_description || "fotografía de Unsplash";
    img.onload = () => {
      if (index === array.length - 1) {
        main.classList.add("loaded");
      }
    };
    btnVisit.classList.add("btn-visit");

    divUser.classList.add("user-container", "flex-container");
    const user = getRandomUser(Users);
    divImgUser.classList.add("img-user-container", "flex-container");
    divImgUser.style.backgroundColor = user.color;
    imgUser.src = user.image;
    pUser.textContent = user.name;
    divShare.classList.add("share-container", "flex-container");
    aImgShare.href = "#";
    aImgShare.title = "Compartir";
    imgShare.classList.add("img-share");
    imgShare.src = "./src/assets/icon-upload-share.svg";
    imgShare.alt = "Compartir";
    pDate.textContent = user.date;

    btnVisit.addEventListener("click", (e) => {
      e.preventDefault();
      OpenImageFullScreen(photo.urls.regular);
    });

    section.append(div);

    div.append(divPhoto);
    divPhoto.append(divIconCamera);
    divIconCamera.append(imgIconCamera);
    divIconCamera.append(pIconCamera);
    divPhoto.append(divIconHeart);
    divIconHeart.append(imgIconHeart);
    divIconHeart.append(pIconHeart);
    divPhoto.append(img);
    divPhoto.append(btnVisit);

    div.append(divUser);
    divUser.append(divImgUser);
    divImgUser.append(imgUser);
    divUser.append(pUser);
    divUser.append(divShare);
    aImgShare.append(imgShare);
    divShare.append(aImgShare);
    divShare.append(pDate);
  });
  main.append(section);
  document.body.append(main);
};
