import "./Button.css";

export const Button = ({
  type = "button",
  text = "insert text",
  size = "l",
  importance = "primary-btn",
  link = "#",
  ariaLabel
}) => {
  const button = document.createElement("button");
  button.type = type;
  button.classList.add("btn", size, importance);

  const a = document.createElement("a");
  a.textContent = text;
  a.href = link;
  if (ariaLabel) {
    button.setAttribute("aria-label", ariaLabel);
  }

  button.appendChild(a);

  return button;
};
