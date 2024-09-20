//---- LOCALSTORAGE--------

export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"))

    if(products) {
        return products
    } else{
        return []
    }
}

//recibir el producto 
export const setInLocalstorage = (productIn) => {
    if (productIn) {
        //traer los elementos
    let productInLocal = handleGetProductLocalStorage();

    const existingIndex = productInLocal.findIndex(
        (productLocal)=> {productLocal.id === productIn.id}
    );

    //verificar si el elemento existe
    if(existingIndex !== -1){
        //si existe debe reemplazarse 
        productInLocal[existingIndex] = productIn;
    } else{
        //si no agregarse 
        productInLocal.push(productIn)
    }

    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productInLocal))
        
    }
    
}