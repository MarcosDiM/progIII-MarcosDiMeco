
import { setInLocalstorage } from "./src/persistence/localstorage.js";
import { renderCategorias } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import "./style.css";

//==== APLICACOIN ====//

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn
}

handleGetProductsToStore()

renderCategorias();


const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
    openModal();
})


//buttonSearch


const buttonSearch = document.getElementById("buttonSearch")
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
})


