/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("continue-button")
    .addEventListener("click", function () {
      this.parentElement.style.display = "none";
      document.getElementById("app").style.display = "block";
    });

  runConverter();
});

function runConverter() {
  let conversionHistory = [];
  initModal(conversionHistory);

  for (let flexTile of document.getElementsByClassName("tile-flex-child")) {
    flexTile.addEventListener("click", loadUnits);
  }

  /* convert button functions **/
  document
    .getElementsByClassName("convert-number")[0]
    .addEventListener("click", function (event) {
      let numberBoxArray = document.getElementsByClassName("number-box");

      if (validate(numberBoxArray)) {
        let currentConversion = document
          .getElementsByClassName("tile-flex-child-selected")[0]
          .children[1].textContent.toLowerCase()
          .trim();

        /* mass conversion**/
        if (currentConversion === "mass") {
          convertMass(numberBoxArray, conversionHistory);
        }

        /* speed conversion**/
        if (currentConversion === "speed") {
          convertSpeed(numberBoxArray, conversionHistory);
        }

        /* pressure conversion**/
        if (currentConversion === "pressure") {
          convertPressure(numberBoxArray, conversionHistory);
        }

        /* temperature conversion**/
        if (currentConversion === "temperature") {
          convertTemperature(numberBoxArray, conversionHistory);
        }
      }
    });
}

function initModal(conversionHistory) {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    if (modal.children[0].children[2]) {
      modal.children[0].removeChild(modal.children[0].children[2]);
    }

    let modalContent = "<div>";
    for (let history of conversionHistory) {
      modalContent += `<div class="history-item">
        <p>${history.fromValue} ${history.fromUnit} <i class="fa-solid fa-arrow-right"></i> ${history.toValue} ${history.toUnit}</p>
      </div>`;
    }
    modalContent += "</div>";

    modal.children[0].insertAdjacentHTML("beforeend", modalContent);
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function validate(numberBoxArray) {
  if (!numberBoxArray[0].value) {
    alert("Input is empty");
    return false;
  }
  if (!numberBoxArray[1].value) {
    alert("Unit to convert from is empty");
    return false;
  }
  if (!numberBoxArray[3].value) {
    alert("Unit to convert to is empty");
    return false;
  }

  return true;
}

/* this funtion loading the units*/
function loadUnits(event) {
  let tileValue = this.children[1].textContent.toLowerCase().trim();
  let alreadySelected = document.getElementsByClassName(
    "tile-flex-child-selected"
  )[0];
  if (alreadySelected) {
    alreadySelected.classList.remove("tile-flex-child-selected");
  }
  this.classList.add("tile-flex-child-selected");

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
  let tempUnits2 = ["Celcius", "Fahrenheit", "Kelvin"];
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
/* create a function to build a histiroy**/
function addToHistory(historyConvert, conversionHistory) {
  if (conversionHistory.length === 5) {
    conversionHistory.shift();
  }
  conversionHistory.push(historyConvert);
}

/* convert mass refactoring**/
function convertMass(numberBoxArray, conversionHistory) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;
  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "kg") {
    if (toUnit === "g") {
      convertedValueElement.value = (parseFloat(inputValue) * 1000).toFixed(2);
    }
    if (toUnit === "mg") {
      convertedValueElement.value = (parseFloat(inputValue) * 1000000).toFixed(
        2
      );
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = (parseFloat(inputValue) * 2.205).toFixed(2);
    }
    if (toUnit === "Oz") {
      convertedValueElement.value = (parseFloat(inputValue) * 35.274).toFixed(
        2
      );
    }
  }

  if (fromUnit === "g") {
    if (toUnit === "kg") {
      convertedValueElement.value = (parseFloat(inputValue) / 1000).toFixed(2);
    }
    if (toUnit === "mg") {
      convertedValueElement.value = (parseFloat(inputValue) * 1000).toFixed(2);
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = (parseFloat(inputValue) / 453.6).toFixed(2);
    }

    if (toUnit === "Oz") {
      convertedValueElement.value = (parseFloat(inputValue) / 28.35).toFixed(2);
    }
  }

  if (fromUnit === "mg") {
    if (toUnit === "kg") {
      convertedValueElement.value = (parseFloat(inputValue) / 1000000).toFixed(
        2
      );
    }
    if (toUnit === "g") {
      convertedValueElement.value = (parseFloat(inputValue) / 1000).toFixed(2);
    }
    if (toUnit === "lbs") {
      convertedValueElement.value = (parseFloat(inputValue) / 453600).toFixed(
        2
      );
    }

    if (toUnit === "Oz") {
      convertedValueElement.value = (parseFloat(inputValue) / 28350).toFixed(2);
    }
  }

  if (fromUnit === "lbs") {
    if (toUnit === "kg") {
      convertedValueElement.value = (parseFloat(inputValue) / 2.205).toFixed(2);
    }
    if (toUnit === "g") {
      convertedValueElement.value = (parseFloat(inputValue) * 453.6).toFixed(2);
    }
    if (toUnit === "mg") {
      convertedValueElement.value = (parseFloat(inputValue) * 453600).toFixed(
        2
      );
    }
    if (toUnit === "Oz") {
      convertedValueElement.value = (parseFloat(inputValue) * 16).toFixed(2);
    }
  }

  if (fromUnit === "Oz") {
    if (toUnit === "kg") {
      convertedValueElement.value = (parseFloat(inputValue) / 35.274).toFixed(
        2
      );
    }

    if (toUnit === "g") {
      convertedValueElement.value = (parseFloat(inputValue) * 28.35).toFixed(2);
    }

    if (toUnit === "mg") {
      convertedValueElement.value = (parseFloat(inputValue) * 28350).toFixed(2);
    }

    if (toUnit === "lbs") {
      convertedValueElement.value = (parseFloat(inputValue) / 16).toFixed(2);
    }
  }
  const historyConvert = {
    fromValue: inputValue,
    toValue: convertedValueElement.value,
    fromUnit: fromUnit,
    toUnit: toUnit,
  };

  addToHistory(historyConvert, conversionHistory);
}

/* convert speed refactoring*/
function convertSpeed(numberBoxArray, conversionHistory) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "km/h") {
    if (toUnit === "mp/h") {
      convertedValueElement.value = (parseFloat(inputValue) / 1.609).toFixed(2);
    }
    if (toUnit === "m/s") {
      convertedValueElement.value = (parseFloat(inputValue) / 3.6).toFixed(2);
    }
  }
  if (fromUnit === "mp/h") {
    if (toUnit === "km/h") {
      convertedValueElement.value = (parseFloat(inputValue) * 1.609).toFixed(2);
    }
    if (toUnit === "m/s") {
      convertedValueElement.value = (parseFloat(inputValue) / 2.237).toFixed(2);
    }
  }

  if (fromUnit === "m/s") {
    if (toUnit === "km/h") {
      convertedValueElement.value = (parseFloat(inputValue) * 3.6).toFixed(2);
    }
    if (toUnit === "mp/h") {
      convertedValueElement.value = (parseFloat(inputValue) * 2.237).toFixed(2);
    }
  }

  const historyConvert = {
    fromValue: inputValue,
    toValue: convertedValueElement.value,
    fromUnit: fromUnit,
    toUnit: toUnit,
  };

  addToHistory(historyConvert, conversionHistory);
}

/* convert pressure refactoring**/
function convertPressure(numberBoxArray, conversionHistory) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "Torr") {
    if (toUnit === "pa") {
      convertedValueElement.value = (parseFloat(inputValue) * 133.3).toFixed(2);
    }

    if (toUnit === "bar") {
      convertedValueElement.value = (parseFloat(inputValue) / 750.1).toFixed(2);
    }
  }

  if (fromUnit === "pa") {
    if (toUnit === "Torr") {
      convertedValueElement.value = (parseFloat(inputValue) / 133.3).toFixed(2);
    }

    if (toUnit === "bar") {
      convertedValueElement.value = (parseFloat(inputValue) / 100000).toFixed(
        2
      );
    }
  }

  if (fromUnit === "bar") {
    if (toUnit === "Torr") {
      convertedValueElement.value = (parseFloat(inputValue) * 750.1).toFixed(2);
    }

    if (toUnit === "pa") {
      convertedValueElement.value = (parseFloat(inputValue) * 100000).toFixed(
        2
      );
    }
  }
  const historyConvert = {
    fromValue: inputValue,
    toValue: convertedValueElement.value,
    fromUnit: fromUnit,
    toUnit: toUnit,
  };

  addToHistory(historyConvert, conversionHistory);
}
/* convert temperature**/
function convertTemperature(numberBoxArray, conversionHistory) {
  const fromUnit = numberBoxArray[1].value;
  const toUnit = numberBoxArray[3].value;
  const inputValue = numberBoxArray[0].value;

  let convertedValueElement = numberBoxArray[2];

  if (fromUnit === "Celcius") {
    if (toUnit === "Fahrenheit") {
      convertedValueElement.value = (
        parseFloat(inputValue) * (9 / 5) +
        32
      ).toFixed(2);
    }

    if (toUnit === "Kelvin") {
      convertedValueElement.value = (parseFloat(inputValue) + 273.15).toFixed(
        2
      );
    }
  }

  if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celcius") {
      convertedValueElement.value = (
        (parseFloat(inputValue) - 32) *
        (5 / 9)
      ).toFixed(2);
    }

    if (toUnit === "Kelvin") {
      convertedValueElement.value = (
        (parseFloat(inputValue) - 32) * (5 / 9) +
        273.15
      ).toFixed(2);
    }
  }

  if (fromUnit === "Kelvin") {
    if (toUnit === "Celcius") {
      convertedValueElement.value = (parseFloat(inputValue) - 273.15).toFixed(
        2
      );
    }

    if (toUnit === "Fahrenheit") {
      convertedValueElement.value = (
        (parseFloat(inputValue) - 273.15) * (9 / 5) +
        32
      ).toFixed(2);
    }
  }

  const historyConvert = {
    fromValue: inputValue,
    toValue: convertedValueElement.value,
    fromUnit: fromUnit,
    toUnit: toUnit,
  };

  addToHistory(historyConvert, conversionHistory);
}
