document.addEventListener("DOMContentLoaded", function () {
  let pressureUnits2 = ["Torr", "pa", "bar"];
  let conversionA = document.getElementById("conversion");
  let conversionB = document.getElementById("conversion-1");
  let flexTiles = document.getElementsByClassName("tile-flex-child");

  for (let flexTile of flexTiles) {
    flexTile.addEventListener("click", loadUnits);
  }

  /* convert button functions **/
  let convertA = document.getElementsByClassName("convert-number")[0];
  convertA.addEventListener("click", function (event) {
    let numberBoxArray = document.getElementsByClassName("number-box");
    /* mass conversion**/
    convertMass(numberBoxArray);

    /* speed conversion**/
    convertSpeed(numberBoxArray);

    /* pressure conversion**/
    convertPressure(numberBoxArray);

    /* temperature conversion**/
    convertTemperature(numberBoxArray);
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

/* convert speed refactoring*/
function convertSpeed(numberBoxArray) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "km/h") {
    if (toUnit === "mp/h") {
      convertedValueElement.value = parseFloat(inputValue) / 1.609;
    }
    if (toUnit === "m/s") {
      convertedValueElement.value = parseFloat(inputValue) / 3.6;
    }
  }
  if (fromUnit === "mp/h") {
    if (toUnit === "km/h") {
      convertedValueElement.value = parseFloat(inputValue) * 1.609;
    }
    if (toUnit === "m/s") {
      convertedValueElement.value = parseFloat(inputValue) / 2.237;
    }
  }

  if (fromUnit === "m/s") {
    if (toUnit === "km/h") {
      convertedValueElement.value = parseFloat(inputValue) * 3.6;
    }
    if (toUnit === "mp/h") {
      convertedValueElement.value = parseFloat(inputValue) * 2.237;
    }
  }
}

/* convert pressure refactoring**/
function convertPressure(numberBoxArray) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "Torr") {
    if (toUnit === "pa") {
      convertedValueElement.value = parseFloat(inputValue) * 133.3;
    }

    if (toUnit === "bar") {
      convertedValueElement.value = parseFloat(inputValue) / 750.1;
    }
  }

  if (fromUnit === "pa") {
    if (toUnit === "Torr") {
      convertedValueElement.value = parseFloat(inputValue) * 133.3;
    }

    if (toUnit === "bar") {
      convertedValueElement.value = parseFloat(inputValue) / 100000;
    }
  }

  if (fromUnit === "bar") {
    if (toUnit === "Torr") {
      convertedValueElement.value = parseFloat(inputValue) * 750.1;
    }

    if (toUnit === "pa") {
      convertedValueElement.value = parseFloat(inputValue) * 100000;
    }
  }
}

function convertTemperature(numberBoxArray) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "Degree celcius") {
    if (toUnit === "fahrenheit") {
      convertedValueElement.value = parseFloat(inputValue) * (9 / 5) + 32;
    }

    if (toUnit === "kelvin") {
      convertedValueElement.value = parseFloat(inputValue) + 273.15;
    }
  }

  if (fromUnit === "fahrenheit") {
    if (toUnit === "Degree celcius") {
      convertedValueElement.value = parseFloat(inputValue) - 32 * (5 / 9);
    }

    if (toUnit === "kelvin") {
      convertedValueElement.value =
        (parseFloat(inputValue) - 32) * (5 / 9) + 273.15;
    }
  }

  if (fromUnit === "kelvin") {
    if (toUnit === "Degree celcius") {
      convertedValueElement.value = parseFloat(inputValue) - 273.15;
    }

    if (toUnit === "fahrenheit") {
      convertedValueElement.value = parseFloat(inputValue) + 273.15;
    }
  }
}
