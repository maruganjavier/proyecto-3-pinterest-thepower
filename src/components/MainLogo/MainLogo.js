import "./MainLogo.css";

export const MainLogo = () => {
  const h1 = document.createElement("h1");
  const a = document.createElement("a");
  const logo = document.createElement("img");

  h1.id = "logoContainer";
  a.classList.add("flex-container");
  a.href = "#";
  a.title = "Pinterest logo";
  a.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
  logo.id = "mainLogo";
  logo.alt = "Pinterest logo";
  logo.src = "./assets/images/logo-pinterest.svg";

  h1.append(a);
  a.append(logo);

  return h1;
};
