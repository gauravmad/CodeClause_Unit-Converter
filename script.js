function showConversionUnits(category) {
    document.getElementById("conversion_units").style.display = "block";
    document.querySelectorAll("#conversion_units > div").forEach(function(unit) {
        unit.style.display = "none";
    });
    document.getElementById(category + "_units").style.display = "block";
}

function convertTemperature() {
    let temperature = document.getElementById("temperature_input").value;
    let celsius = document.getElementById("celsius").checked;
    let fahrenheit = document.getElementById("fahrenheit").checked;
    if (celsius) {
        let result = (temperature * 9/5) + 32;
        document.getElementById("temperature_result").innerHTML = temperature + " &deg;C = " + result.toFixed(2) + " &deg;F";
    } else {
        let result = (temperature - 32) * 5/9;
        document.getElementById("temperature_result").innerHTML = temperature + " &deg;F = " + result.toFixed(2) + " &deg;C";
    }
}

function convertMass() {
    let mass = document.getElementById("mass_input").value;
    let kilograms = document.getElementById("kilograms").checked;
    let pounds = document.getElementById("pounds").checked;
    if(kilograms){
        let result = mass * 2.20462;
        document.getElementById("mass_result").innerHTML = mass + "kg = " + result.toFixed(2) + " lbs";
    }
    else{
        let result = mass / 2.20462;
        document.getElementById("mass_result").innerHTML = mass + " lbs = " + result.toFixed(2) + " kg";
    }
}