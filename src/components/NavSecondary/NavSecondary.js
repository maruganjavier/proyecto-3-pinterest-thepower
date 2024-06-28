import "./NavSecondary.css";

export const NavSecondary = () => {
  const nav = document.createElement("nav");
  nav.id = "navSecondary";

  const ul = document.createElement("ul");
  ul.classList.add("flex-container");

  const icons = [
    {
      src: "./assets/images/icons/icon-bell.svg",
      alt: "Icono de campana",
      href: "#",
      title: "Avisos"
    },
    {
      src: "./assets/images/icons/icon-comment.svg",
      alt: "Icono de comentarios",
      href: "#",
      title: "Comentarios"
    }
  ];

  icons.forEach((icon) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = icon.href;
    a.title = icon.title;
    img.src = icon.src;
    img.alt = icon.alt;

    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;
};
