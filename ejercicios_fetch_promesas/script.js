async function getDataUser() {

    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        
        const person = data.results[0]

        const nombre = `${person.name.first} ${person.name.last}`

        const ubicacion = `${person.location.country} ${person.location.state}`

        const urlImage = `${person.picture.medium}`

        console.log(nombre)
        console.log(ubicacion)
        console.log(urlImage) 

        const divInfo = document.getElementById("userInfo")

        divInfo.innerHTML = `
        <p> Nombre: ${nombre} </p>
        <p> Ubicacion: ${ubicacion} </p>
        <img src = ${urlImage} width = 150>    
        `

    } catch (error){
        console.log(error)
    }    
}

getDataUser()
    