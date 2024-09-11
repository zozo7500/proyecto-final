botonsi = document.querySelector("#boton1")

botonsi.addEventListener("click", () => {
    alert("Estas de acuerdo")
    document.querySelector("body").style.backgroundColor="green"
    document.querySelector("#title").style.color="white"
})
