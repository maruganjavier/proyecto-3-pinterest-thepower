import { Header } from "./src/layout/Header/Header";
import { FetchUnsplashPhotos } from "./src/data/FetchUnsplashPhotos";
import { PrintPhotos } from "./src/utils/functions/PrintPhotos/PrintPhotos";
import { HandleSearchBar } from "./src/utils/functions/HandleSearchBar/HandleSearchBar";

const runApp = async (query = "gatos") => {
  try {
    const photos = await FetchUnsplashPhotos(query);

    if (!photos || photos.length === 0) {
      alert(
        "No hay fotos para mostrar.\nPrueba a usar otra frase o palabra para una búsqueda correcta.\n\nMientras tanto, puedes mirar estos 🐈🐈‍..."
      );
      await runApp();
    } else {
      PrintPhotos({ array: photos });
    }
  } catch (error) {
    console.error("Error al buscar y mostrar fotos:", error);
  }
};

const onSearch = async (query) => {
  try {
    if (query) {
      let section = document.querySelector("#gallery");

      if (section) {
        section.innerHTML = "";
      }

      await runApp(query);
    }
  } catch (error) {
    console.error("Error al realizar la búsqueda:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Header();
  runApp();
  HandleSearchBar(onSearch);
});
