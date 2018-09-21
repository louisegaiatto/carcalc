

function validateCar() {
    
    var selectedCar, carJson;

    selectedCar = document.getElementById("dropdown").value.split(" ");

    carJson = {"montadora":selectedCar[0],
                "modelo":selectedCar[1],
                "ano": selectedCar[2]}

    return carJson;

}
