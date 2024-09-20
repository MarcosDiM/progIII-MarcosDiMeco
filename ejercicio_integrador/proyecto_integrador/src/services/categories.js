//===== CATEGORIA ====//

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory =(categoriaIn) =>{
    const products = handleGetProductLocalStorage();
    switch (categoriaIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categories === categoriaIn)
            handleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio)
            handleRenderList(resultPrecioMayor)
            break
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio)
            handleRenderList(resultPrecioMenor)
            break
        
    }
}


//render de la vista categorias

export const renderCategorias = () => {
    const ulList = document.getElementById("listFilter")
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor precio</li>
    `;

    const liElements = ulList.querySelectorAll("li"); // querySelectorAll corregido
    liElements.forEach(liElement => {                 // Remover el .array
        liElement.addEventListener('click', () => {
            handleClick(liElement);
    });
});
const handleClick = (elemento) => {
    handleFilterProductsByCategory(elemento.id);
    liElements.forEach((el)=>{
        if(el.classList.contains("liActive")){
            el.classList.remove("liActive")
        } else{
            if(elemento === el){
                el.classList.add("liActive")
            }
        }
    })
}}