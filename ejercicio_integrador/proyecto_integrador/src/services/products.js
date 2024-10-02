/* --- product --- */
import Swal from "sweetalert2";

import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalstorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";



const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener("click", ()=>{
    handleSaveOrModifyElements();
})


const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categories = document.getElementById("categories").value;
    let object = null;
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }
    }else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        }
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
        });

    setInLocalstorage(object);
    handleGetProductsToStore()
    closeModal();
}


//eliminar elemento 

export const handleDeleteProduct = ()=> {
    Swal.fire({
        title: "Deseas eliminar elemento?",
        text: "Si lo eliminas sera permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
        }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id ) 
            localStorage.setItem("products", JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts)
            closeModal();
        } else {
            closeModal();
        }
        });


    
    

}
