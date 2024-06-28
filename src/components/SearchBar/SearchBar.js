import "./SearchBar.css";

export const SearchBar = ({
  labelSearchFor = "searchBar",
  inputSearchId = "searchBar"
}) => {
  const formSearch = document.createElement("form");
  const labelSearch = document.createElement("label");
  const inputSearch = document.createElement("input");

  formSearch.id = "formSearchBar";
  formSearch.classList.add("flex-container");

  labelSearch.htmlFor = labelSearchFor;

  inputSearch.id = inputSearchId;
  inputSearch.name = "searchBar";
  inputSearch.type = "search";
  inputSearch.placeholder = "🔎 Buscar";

  formSearch.append(labelSearch);
  formSearch.append(inputSearch);

  return formSearch;
};
