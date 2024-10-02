/* --- POPUP --- */

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const buttonCancel = document.getElementById("cancelButton")
buttonCancel.addEventListener("click",()=>{
    handleCancelButton();
})

const handleCancelButton = () => {
    closeModal();
}



/* --- FUNCIONES ABRIR Y CERRAR MODAL */

export const openModal = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "flex"
    const buttonDelete = document.getElementById("deleteButton")
    if(productoActivo){
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre");
        const imagen = document.getElementById("img");
        const precio = document.getElementById("precio");
        const categories = document.getElementById("categories");
        
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
    }
}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp")
    modal.style.display = "none"
    setProductoActivo(null)
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categories = document.getElementById("categories");

    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}

const deleteButton = document.getElementById("deleteButton")

deleteButton.addEventListener("click",() => {
    handlebuttonDelete();
})

const handlebuttonDelete = () => {
    handleDeleteProduct();
}