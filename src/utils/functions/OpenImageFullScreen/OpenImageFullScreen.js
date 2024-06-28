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
    text: "X",
    importance: "tertiary-btn",
    size: "m-special",
    ariaLabel: "Cerrar"
  });
  closeButton.classList.add("close-button", "flex-container");

  const CloseFullScreen = () => {
    fullScreenContainer.classList.remove("show");
    setTimeout(() => {
      section.removeChild(fullScreenContainer);
    }, 300);
    document.removeEventListener("keydown", HandleEscapeKey);
  };

  const HandleEscapeKey = (e) => {
    if (e.key === "Escape") {
      CloseFullScreen();
    }
  };

  closeButton.addEventListener("click", CloseFullScreen);
  document.addEventListener("keydown", HandleEscapeKey);

  fullScreenContainer.append(fullScreenImage);
  fullScreenContainer.append(closeButton);
  section.append(fullScreenContainer);

  requestAnimationFrame(() => {
    fullScreenContainer.classList.add("show");
  });
};
