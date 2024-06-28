import "./OpenImageFullScreen.css";
import { Button } from "../../../components/Button/Button";

export const OpenImageFullScreen = (imgSrc) => {
  const section = document.querySelector("#gallery");
  const fullScreenContainer = document.createElement("div");
  fullScreenContainer.classList.add("fullscreen-container", "flex-container");

  const fullScreenImage = document.createElement("img");
  fullScreenImage.src = imgSrc;
  fullScreenImage.classList.add("fullscreen-image");

  const closeButton = Button({
    text: "x",
    importance: "tertiary-btn",
    size: "m-special",
    ariaLabel: "Cerrar"
  });
  closeButton.classList.add("close-button", "flex-container");

  const closeFullScreen = () => {
    section.removeChild(fullScreenContainer);
    document.removeEventListener("keydown", handleEscapeKey);
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      closeFullScreen();
    }
  };

  closeButton.addEventListener("click", closeFullScreen);
  document.addEventListener("keydown", handleEscapeKey);

  fullScreenContainer.append(fullScreenImage);
  fullScreenContainer.append(closeButton);
  section.append(fullScreenContainer);
};
