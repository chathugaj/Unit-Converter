document.addEventListener("DOMContentLoaded", function () {
  let pressureUnits2 = ["Torr", "pa", "bar"];
  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  let flexTiles = document.getElementsByClassName("tile-flex-child");

  for (let flexTile of flexTiles) {
    flexTile.addEventListener("click", loadUnits);
  }

  /*if (measrueTypeVal === "pressure") {
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

    /* loading mass unit
    let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
    if (event.target.value === "mass") {
      for (let unit of massUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading temperature unit
    let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
    if (event.target.value === "temprature") {
      for (let unit of tempUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading speed unit
    let speedUnits2 = ["km/h", "mp/h", "m/s"];
    if (event.target.value === "speed") {
      for (let unit of speedUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
    /* loading pressure unit

    if (event.target.value === "pressure") {
      for (let unit of pressureUnits2) {
        createUnitOption(unit, conversionA);
        createUnitOption(unit, conversionB);
      }
    }
  });*/
  /* convert button functions **/
  let convertA = document.getElementsByClassName("convert-number")[0];
  convertA.addEventListener("click", function (event) {
    let numberBoxArray = document.getElementsByClassName("number-box");
    /* convert kg to other units**/
    convertMass(numberBoxArray);

    /* convert grams to other units**/

    /* converting mg's to other units**/

    /* lbs to other units**/

    /* converting Oz to other units**/

    /* converting km/h values to other units **/
    if (conversionA.value === "km/h") {
      if (conversionB.value === "mp/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 1.609;
      }
      if (conversionB.value === "m/s") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 3.6;
      }
    }
    /* converting mp/h values to other units**/
    if (conversionA.value === "mp/h") {
      if (conversionB.value === "km/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 1.609;
      }
      if (conversionB.value === "m/s") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 2.237;
      }
    }
    /* converting m/s values to other units **/
    if (conversionA.value === "m/s") {
      if (conversionB.value === "km/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 3.6;
      }
      if (conversionB.value === "mp/h") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 2.237;
      }
    }
    /* converting torr to other units **/
    if (conversionA.value === "Torr") {
      if (conversionB.value === "pa") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 133.3;
      }

      if (conversionB.value === "bar") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 750.1;
      }
    }
    /* converting pa to other units**/
    if (conversionA.value === "Pa") {
      if (conversionB.value === "Torr") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 133.3;
      }

      if (conversionB.value === "bar") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) / 100000;
      }
    }
    /* converting bar to other units**/
    if (conversionA.value === "bar") {
      if (conversionB.value === "Torr") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 750.1;
      }

      if (conversionB.value === "pa") {
        let inputValue = document.getElementById("number-box").value;

        document.getElementById("number-box1").value =
          parseFloat(inputValue) * 100000;
      }
    }
  });
});

function runConverter() {}

function calculateConversion() {}

/* this funtion loading the units*/
function loadUnits(event) {
  let tileValue = this.getAttribute("value");

  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  conversionA.innerHTML = "";
  conversionB.innerHTML = "";

  /*loading mass unit*/
  let massUnits2 = ["kg", "g", "mg", "lbs", "Oz"];
  if (tileValue === "mass") {
    for (let unit of massUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading temperature unit*/
  let tempUnits2 = ["Degree celcius", "fahrenheit", "kelvin"];
  if (tileValue === "temperature") {
    for (let unit of tempUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading speed unit*/
  let speedUnits2 = ["km/h", "mp/h", "m/s"];
  if (tileValue === "speed") {
    for (let unit of speedUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
  /*loading pressure unit*/
  let pressureUnits2 = ["Torr", "pa", "bar"];
  if (tileValue === "pressure") {
    for (let unit of pressureUnits2) {
      createUnitOption(unit, conversionA);
      createUnitOption(unit, conversionB);
    }
  }
}

/* declare a function to reuse create , appendChild and populate measuring unit to option elements  **/
function createUnitOption(unit, selectElement) {
  let option = document.createElement("option");
  selectElement.appendChild(option);
  option.innerHTML = unit;
}
/* convert mass refactoring**/
function convertMass(numberBoxArray) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "kg") {
    if (toUnit === "g") {
      convertedValueElement.value = parseFloat(inputValue) * 1000;
    }
    if (toUnit === "mg") {
      convertedValueElement.value = parseFloat(inputValue) * 1000000;
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = parseFloat(inputValue) * 2.205;
    }
    if (toUnit === "Oz") {
      convertedValueElement.value = parseFloat(inputValue) * 35.274;
    }
  }

  if (fromUnit === "g") {
    if (toUnit === "kg") {
      convertedValueElement.value = parseFloat(inputValue) / 1000;
    }
    if (toUnit === "mg") {
      convertedValueElement.value = parseFloat(inputValue) * 1000;
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = parseFloat(inputValue) / 453.6;
    }

    if (toUnit === "Oz") {
      convertedValueElement.value = parseFloat(inputValue) / 28.3;
    }
  }

  if (fromUnit === "mg") {
    if (toUnit === "kg") {
      convertedValueElement.value = parseFloat(inputValue) / 1000000;
    }
    if (toUnit === "g") {
      convertedValueElement.value = parseFloat(inputValue) / 1000;
    }
    if (toUnit === "lbs") {
      convertedValueElement.value = parseFloat(inputValue) * 453600;
    }

    if (toUnit === "Oz") {
      convertedValueElement.value = parseFloat(inputValue) / 28350;
    }
  }

  if (fromUnit === "lbs") {
    if (toUnit === "kg") {
      convertedValueElement.value = parseFloat(inputValue) / 2.205;
    }
    if (toUnit === "g") {
      convertedValueElement.value = parseFloat(inputValue) / 2.205;
    }
    if (toUnit === "mg") {
      convertedValueElement.value = parseFloat(inputValue) * 453600;
    }
    if (toUnit === "Oz") {
      convertedValueElement.value = parseFloat(inputValue) * 16;
    }
  }

  if (fromUnit === "Oz") {
    if (toUnit === "kg") {
      convertedValueElement.value = parseFloat(inputValue) / 35.274;
    }

    if (toUnit === "g") {
      convertedValueElement.value = parseFloat(inputValue) * 28.35;
    }

    if (toUnit === "mg") {
      convertedValueElement.value = parseFloat(inputValue) * 28350;
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = parseFloat(inputValue) / 16;
    }
  }
}

function convertTemperature() {}

function convertSpeed() {}

function convertPressure() {}
