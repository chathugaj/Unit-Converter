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
    /* convert kg to other units**/
    if (conversionA.value === "kg") {
      if (conversionB.value === "g") {
        let input1 = document.getElementById("number-box");
        let inputValue = input1.value;
        console.log(parseFloat(inputValue) * 1000);
        let input2 = document.getElementById("number-box1");
        input2.value = parseFloat(inputValue) * 1000;
      }
      if (conversionB.value === "mg") {
        let input1 = document.getElementById("number-box");
        let inputValue = input1.value;
        console.log(1000000);
        let input2 = document.getElementById("number-box1");
        input2.value = parseFloat(inputValue) * 1000000;
      }

      if (conversionB.value === "lbs") {
        let input1 = document.getElementById("number-box");
        let inputValue = input1.value;
        console.log(2.205);
        let input2 = document.getElementById("number-box1");
        input2.value = parseFloat(inputValue) * 2.205;
      }
      if (conversionB.value === "Oz") {
        let input1 = document.getElementById("number-box");
        let inputValue = input1.value;
        console.log(35.274);
        let input2 = document.getElementById("number-box1");
        input2.value = parseFloat(inputValue) * 35.274;
      }
    }
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
