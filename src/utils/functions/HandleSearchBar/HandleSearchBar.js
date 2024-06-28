export const HandleSearchBar = (onSearch) => {
  const inputSearch = document.querySelector("#searchBar");
  let typingTimer;
  const doneTypingInterval = 2000;

  const handleInput = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();
      if (query) {
        //console.log(query)
        onSearch(query);
      }
    }, doneTypingInterval);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clearTimeout(typingTimer);
      const query = e.target.value.toLowerCase().trim();
      if (query) {
        onSearch(query);
      }

      inputSearch.addEventListener("input", handleInput);
    }
  };

  inputSearch.addEventListener("input", handleInput);
  inputSearch.addEventListener("keypress", handleKeyPress);
};
