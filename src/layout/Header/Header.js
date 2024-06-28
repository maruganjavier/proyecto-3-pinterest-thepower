import "./Header.css";

import { MainLogo } from "../../components/MainLogo/MainLogo";
import { Nav } from "../../components/Nav/Nav";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { NavSecondary } from "../../components/NavSecondary/NavSecondary";
import { UserSessionIcon } from "../../components/UserSessionIcon/UserSessionIcon";

export const Header = () => {
  const header = document.createElement("header");

  header.id = "header";
  header.classList.add("flex-container");

  header.append(MainLogo());
  header.append(Nav());
  header.append(SearchBar({}));
  header.append(NavSecondary());
  header.append(UserSessionIcon({}));
  document.body.append(header);
};
