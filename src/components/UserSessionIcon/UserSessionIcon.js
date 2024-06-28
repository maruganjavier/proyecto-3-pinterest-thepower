import "./UserSessionIcon.css";

export const UserSessionIcon = ({ user = "david" }) => {
  const a = document.createElement("a");
  const div = document.createElement("div");
  const p = document.createElement("p");

  a.id = "userSessionIconContainer";
  a.href = "#";
  a.title = "Login";

  div.id = "userSessionIcon";
  div.classList.add("flex-container");
  p.id = "nameUser";
  p.textContent = user[0].toUpperCase();

  div.append(p);
  a.appendChild(div);

  return a;
};
