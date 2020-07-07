var celsius = document.getElementById('celsius')
var kelvin = document.getElementById('kelvin')
var farenhint = document.getElementById('farenhint')


celsius.addEventListener('keyup', displayCel)
kelvin.addEventListener('keyup', displayKel)
farenhint.addEventListener('keyup', displayFar)

function displayCel() {
    let celValue = celsius.value.trim()
    if (celValue != "") {
        let kelvinValue = (celValue + 273.15)
        let farenhintValue = (celValue * 1.8) + 32
        kelvin.value = Math.floor(`${kelvinValue}`);
        farenhint.value = Math.floor(`${farenhintValue}`);
    } else {
        kelvin.value = ""
        farenhint.value = ""
    }

}

function displayKel() {
    let kelValue = kelvin.value.trim()
    if (kelValue != "") {
        let celsiusValue = Math.floor(kelValue - 273.15);
        let farenhintValue = Math.floor((kelValue * 1.8) - 459.67);
        celsius.value = Math.floor(celsiusValue)
        farenhint.value = Math.floor(farenhintValue)

    } else {
        celsius.value = ""
        farenhint.value = ""
    }
}

function displayFar() {
    let farValue = farenhint.value.trim()
    if (farValue != "") {
        let kelvinValue = Math.floor((farValue + 459.67) * 5 / 9);
        let celsiusValue = Math.floor((farValue - 32) * 5 / 9);
        kelvin.value = Math.floor(`${kelvinValue}`);
        celsius.value = Math.floor(`${celsiusValue}`);
    } else {
        kelvin.value = ""
        celsius.value = ""
    }
}