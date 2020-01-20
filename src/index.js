// import 'babel-polyfill';

// import metricDistanceUnits from './units.js';
// import currencies from './units.js';  //// Not working

const metricDistanceUnits = [
  'Millimeter', 'Centimeter', 'Meter', 'Kilometer'
];

const imperialDistanceUnits = [
  'Inch', 'Foot', 'Yard', 'Mile'
];

const metricToImperialDistance = {
 'Millimeter': {
    'Inch': 0.0393701,
    'Foot': 0.003280841666667,
    'Yard': 0.0010936138888889999563,
    "Mile": 0.0000000621371527777,
  },
  'Centimeter': {
    'Inch': 0.393701,
    'Foot': 0.03280841666667,
    'Yard': 0.010936138888889999563,
    "Mile": 0.000000621371527777,
  },
  'Meter': {
    'Inch': 39.370100000004001117,
    'Foot': 3.280841666666999501,
    'Yard': 1.0936138888889999077,
    "Mile": 0.00062137152777784086452,
  },
  'Kilometer': {
    'Inch': 39370.100000004000321,
    'Foot': 3280.841666666999572,
    'Yard': 1093.6138888890000089,
    "Mile": 0.62137152777784099289,
  },
};

const metricLiquidUnits = [
  'Milliliter', 'Liter'
]

const imperialLiquidUnits = [
  'Teaspoon', 'Tablespoon', 'Fluid Ounce', 'Cup', 'Pint', 'Quart', 'Gallon'
]

const metricToImperialLiquid = {
  'Milliliter': {
    'Teaspoon': 0.202884,
    'Tablespoon': 0.067628,
    'Fluid Ounce': 0.033814,
    'Cup': 0.00416667,
    'Pint': 0.00211338,
    "Quart": 0.00105669,
    "Gallon": 0.000264172
  },
  'Liter': {
    'Teaspoon': 202.884,
    'Tablespoon': 67.628,
    'Fluid Ounce': 33.814,
    'Cup': 4.16667,
    'Pint': 2.11338,
    "Quart": 1.05669,
    "Gallon": 0.264172
  }
}

const metricTemperatureUnits = [
  'Celcius'
]

const imperialTemperatureUnits = [
  'Fahrenheit'
]

const metricToImperialTemperature = {
  'Celcius': {
    Fahrenheit: function(num) {
      return num * (9/5) + 32
    }
  },
}

const metricWeightUnits = [
  'Milligram', 'Gram', 'Kilogram', 'Metric Ton'
]

const imperialWeightUnits = [
  'Ounce', 'Pound', 'Ton'
]

const metricToImperialWeight= {
  'Milligram': {
    'Ounce': 0.0000035274,
    'Pound': 0.00000022046,
    'Ton': 0.00000000011023,
  },
  'Gram': {
    'Ounce': 0.035274,
    'Pound': 0.00220462,
    'Ton': 0.00000011023
  },
  'Kilogram': {
    'Ounce': 35.274,
    'Pound': 2.20462,
    'Ton': 0.00110231
  },
  'Metric Ton': {
    'Ounce': 35274,
    'Pound': 2204.62199992473,
    'Ton': 1.10231
  }
}


const metricToImperialCurrency = {

}

// const imperialToMetric = {
//   'Inch': {
//     'Millimeter': 25.400013716002582953,
//     'Centimeter': 2.5400013716002582953,
//     'Meter': 0.025400013716002582675,
//     'Kilometer': 0.0000025400013716002,
//   },
//   'Foot': {
//     'Millimeter': 304.80016459203102386,
//     'Centimeter': 30.480016459203103096,
//     'Meter': 0.30480016459203101986,
//     'Kilometer': 0.00030480016459203101292,
//   },
//   'Yard': {
//     'Millimeter': 914.40049377609295789,
//     'Centimeter': 91.440049377609298631,
//     'Meter': 0.91440049377609300407,
//     'Kilometer': 0.00091440049377609303877,
//   },
//   'Mile': {
//     'Millimeter': 1609344.8690459236968,
//     'Centimeter': 160934.48690459236968,
//     'Meter': 1609.3448690459238151,
//     'Kilometer': 1.609344869045923776,
//   }
// }




const placeholderArray = ['Unit', 'Unit', 'Unit', 'Unit'];

const panels = document.querySelectorAll('.panel');

// Wait function
function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function unitTypeMargin(e) {
  const unitDiv = e.currentTarget.querySelector('.unit-type');
  unitDiv.style.marginTop = "0px";
}

let selectTopValue;
let selectBottomValue;
let topSelect;
let bottomSelect;

function handleSelectValues(e, topSelect, bottomSelect) {
  if (e.target.classList.contains('select_top')) {
  let selectedTopIndex = e.target.options.selectedIndex;
  selectTopValue = (e.target.options[selectedTopIndex].value)
  topSelect = topSelect;
  }

  if (e.target.classList.contains('select_bottom')) {
  let selectedBottomIndex = e.target.options.selectedIndex;
  selectBottomValue = (e.target.options[selectedBottomIndex].value)
  bottomSelect = bottomSelect;
  }
 }

function createSelectEventListeners(selects) {
  topSelect = selects[0];
  bottomSelect = selects[1];

  topSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e, topSelect, bottomSelect);
  })

  bottomSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e, topSelect, bottomSelect);
  })
}

function convertUnits(topValue, bottomValue, topInput, bottomInput) {
  const unitConverterArray = checkPanelNumber(topInput.parentNode.parentNode.parentNode)[2];

    if (selectTopValue === 'Celcius' && selectBottomValue === 'Fahrenheit') {
      bottomInput.value = unitConverterArray.Celcius.Fahrenheit(topValue).toFixed(2);
      return;
    }
  // console.log(selectTopValue);
  // console.log(selectBottomValue);
  // console.log(unitConverterArray);

    if (topValue) {
      const rate = unitConverterArray[`${selectTopValue}`][`${selectBottomValue}`];
      const convertedAmount = topValue * rate;
      bottomInput.value = convertedAmount.toFixed(4);
    }

    // if (bottomValue) {
    //   const rate = imperialToMetric[`${selectBottomValue}`][`${selectTopValue}`];
    //   const convertedAmount = topValue * rate;
    //   topInput.value = convertedAmount.toFixed(5);
    // }

  topSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e, topSelect, bottomSelect);
    convertUnits(topValue, bottomValue, topInput, bottomInput);
  })

  bottomSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e, topSelect, bottomSelect);
    convertUnits(topValue, bottomValue, topInput, bottomInput);
  })
}

function createInputsEventListeners(inputs) {
  let topInput = inputs[0];
  let bottomInput = inputs[1];
  let inputTopValue = [];
  let inputBottomValue = [];

  topInput.addEventListener('keyup', function() {
    inputTopValue = topInput.value;
    convertUnits(inputTopValue, inputBottomValue, topInput, bottomInput)
  })

  bottomInput.addEventListener('keyup', function() {
    inputBottomValue = bottomInput.value;
    convertUnits(inputTopValue, inputBottomValue, topInput, bottomInput)
  })
}

function findInputs() {
  let inputs = [
  ...Array.from(document.querySelectorAll('input')),
  ...Array.from(document.querySelectorAll('select')),
  ]
  let specificInputs = []
  let specificSelects = [];
  let topInput = inputs.find(function(element) {
    return element.classList.contains("amount_top")
  })

  let topSelect = inputs.find(function(element) {
    return element.classList.contains("select_top")
  })

  let bottomInput = inputs.find(function(element) {
    return element.classList.contains("amount_bottom")
  })

  let bottomSelect = inputs.find(function(element) {
    return element.classList.contains("select_bottom")
  })

  specificInputs.push(topInput, bottomInput);
  specificSelects.push(topSelect, bottomSelect);

  createSelectEventListeners(specificSelects);
  createInputsEventListeners(specificInputs);
}

function checkPanelNumber(panel) {
  let panelArr = Array.from(panel.childNodes);
  let thisPanel = panelArr.find(function(element) {
    if (element.nodeName === '#text') return;
    return element.classList.contains("unit-type");
  })

  switch (thisPanel.innerText) {
    case 'DISTANCE': return [metricDistanceUnits, imperialDistanceUnits, metricToImperialDistance];
      break;
    case 'LIQUID': return [metricLiquidUnits, imperialLiquidUnits, metricToImperialLiquid];
      break;
    case 'TEMPERATURE': return [metricTemperatureUnits, imperialTemperatureUnits, metricToImperialTemperature];
      break;
    case 'WEIGHT': return [metricWeightUnits, imperialWeightUnits, metricToImperialWeight];
      break;
    case 'CURRENECY': return [placeholderArray, placeholderArray];
      break;
    default: null;
  }
}

function generateOptions(options) {
  if (!options) return;
  return options
    .map(
      (unit) =>
        `<option value="${unit}">${unit}</option>`
    )
}

async function createInputs(e) {
  let optionsTopHTML = generateOptions(checkPanelNumber(e.currentTarget)[0]);
  let optionsBottomHTML = generateOptions(checkPanelNumber(e.currentTarget)[1]);
  const para1 = (e.currentTarget.firstElementChild);
  const para2 = (e.currentTarget.lastElementChild);
  await wait(500);
  const htmlTop = `
  <div class='inputs-select slide-down' style="width: 40%; margin-top: -22px;">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Unit Type</label>
            <select class="distance-select select_top" id="distance-select" style="width: 130px; height: 35px;">
            <option selected="selected">Select a unit</option>
            ${optionsTopHTML.join('')}
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
            <input class="amount_top" type="number" style="width: 130px; height: 35px;" placeholder="" id="">
          </div>
  </div>
  `;

  const htmlBottom = `
  <div class='inputs-select slide-up' style="width: 40%; margin-bottom: -15px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Unit Type</label>
            <select class="select_bottom" id="distance-select" style="width: 130px; height: 35px;">
            <option selected="selected">Select a unit</option>
                ${optionsBottomHTML.join('')}
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Converted Units</label>
            <input class="amount_bottom" type="number" style="width: 130px; height: 35px;" placeholder="" id="">
          </div>
        </div>
      `
  para1.insertAdjacentHTML('afterend', htmlTop);
  para2.insertAdjacentHTML('beforebegin', htmlBottom);
  await wait(100); // waiting to give a chance to find inputs after 'open' and 'open-active' transfer to new panel
  findInputs();
}

function removeInputs() {
  const inputSelects = Array.from(document.querySelectorAll('.inputs-select'));
    function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
  }
    inputSelects.forEach(input => removeFadeOut(input, 600));
}

function toggleOpen(e) {
  const panelsArr = Array.from(panels);
  let openPanel = panelsArr.find(panel => panel.classList.contains('open'));

  if (e.target.type === 'number') {
    return;
  }
  if (e.target.type === 'select-one') {
    return;
  }
  if (this === openPanel) {
    openPanel.classList.remove('open');
    removeInputs();
    return;
  }
  if (openPanel) {
    openPanel.classList.remove('open');
    removeInputs();
  }

  this.classList.toggle('open');
  unitTypeMargin(e);
  createInputs(e);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex'))
  this.classList.toggle('open-active');
}

// Panel event listeners
panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
})

panels.forEach(panel => {
  panel.addEventListener('transitionend', toggleActive);
})
