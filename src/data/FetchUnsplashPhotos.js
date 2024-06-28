export const FetchUnsplashPhotos = async (query) => {
  const endPoint = "https://api.unsplash.com/search/photos";
  const accesKey = "UGCDB8LwNtNh59h2Euq4_6PqYrbJl5iv1Gtp4P088MM";
  const perPage = 20;

  const response = await fetch(
    endPoint +
      "?query=" +
      query +
      "&per_page=" +
      perPage +
      "&client_id=" +
      accesKey
  );
  const res = await response.json();

  const resultsUnsplash = res.results;
  //console.log(resultsUnsplash);
  return resultsUnsplash;
};
