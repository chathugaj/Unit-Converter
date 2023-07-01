document.addEventListener("DOMContentLoaded", function () {
  let meassures = document.getElementsByTagName("option");
  /**for (let measure of meassures) {
    measure.addEventListener("select", function () {
      console.log(this);
    });
  }*/
  let measuretype1 = document.getElementById("measuretype");
  measuretype1.addEventListener("change", function (event) {
    let conversionA = document.getElementById("conversion");
    let conversionB = document.getElementById("conversion-1");
    conversionA.innerHTML = "";
    conversionB.innerHTML = "";

    let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
    if (event.target.value === "mass") {
      for (let unit of massUnits2) {
        let option = document.createElement("option");
        conversionA.appendChild(option);
        option.innerHTML = unit;
        let option1 = document.createElement("option");
        conversionB.appendChild(option1);
        option1.innerHTML = unit;
      }
    }

    let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
    if (event.target.value === "temprature") {
      for (let unit of tempUnits2) {
        let option = document.createElement("option");
        conversionA.appendChild(option);
        option.innerHTML = unit;
        let option1 = document.createElement("option");
        conversionB.appendChild(option1);
        option1.innerHTML = unit;
      }
    }

    let speedUnits2 = ["km/h", "mp/h", "m/s"];
    if (event.target.value === "speed") {
      for (let unit of speedUnits2) {
        let option = document.createElement("option");
        conversionA.appendChild(option);
        option.innerHTML = unit;
        let option1 = document.createElement("option");
        conversionB.appendChild(option1);
        option1.innerHTML = unit;
      }
    }

    let pressureUnits2 = ["Torr", "pa", "bar"];
    if (event.target.value === "pressure") {
      for (let unit of pressureUnits2) {
        let option = document.createElement("option");
        conversionA.appendChild(option);
        option.innerHTML = unit;
        let option1 = document.createElement("option");
        conversionB.appendChild(option1);
        option1.innerHTML = unit;
      }
    }
  });
});

function runConverter() {}

function calculateConversion() {}
