document.addEventListener("DOMContentLoaded", function () {
  let measuretype1 = document.getElementById("measuretype");
  let measrueTypeVal = measuretype1.value;
  let pressureUnits2 = ["Torr", "pa", "bar"];
  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  if (measrueTypeVal === "pressure") {
    for (let unit of pressureUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }

  measuretype1.addEventListener("change", function (event) {
    let conversionA = document.getElementById("conversion");
    let conversionB = document.getElementById("conversion-1");
    conversionA.innerHTML = "";
    conversionB.innerHTML = "";

    /* loading mass unit**/
    let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
    if (event.target.value === "mass") {
      for (let unit of massUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading temperature unit**/
    let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
    if (event.target.value === "temprature") {
      for (let unit of tempUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading speed unit**/
    let speedUnits2 = ["km/h", "mp/h", "m/s"];
    if (event.target.value === "speed") {
      for (let unit of speedUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading pressure unit**/

    if (event.target.value === "pressure") {
      for (let unit of pressureUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
  });
  /* convert button functions **/
  let convertA = document.getElementsByClassName("convert-number")[0];
  convertA.addEventListener("click", function (event) {
    console.log(convertA);
  });
});

function runConverter() {}

function calculateConversion() {}
/* declare a function to reuse create , appendChild and populate measuring unit to option elements  **/
function createUnitOption(unit, selectElement) {
  let option = document.createElement("option");
  selectElement.appendChild(option);
  option.innerHTML = unit;
}
