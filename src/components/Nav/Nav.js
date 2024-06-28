import "./Nav.css";

import { Button } from "../../components/Button/Button";

export const Nav = () => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const buttons = [
    { text: "Inicio", ariaLabel: "Inicio" },
    { text: "Explorar", importance: "secondary-btn", ariaLabel: "Explorar" },
    { text: "Crear", importance: "secondary-btn", ariaLabel: "Crear" }
  ];

  buttons.forEach((buttonInfo) => {
    const li = document.createElement("li");
    const button = Button({
      text: buttonInfo.text,
      importance: buttonInfo.importance,
      ariaLabel: buttonInfo.ariaLabel
    });

    li.appendChild(button);
    ul.appendChild(li);
  });

  nav.id = "mainNav";
  ul.classList.add("flex-container");

  nav.appendChild(ul);

  return nav;
};
