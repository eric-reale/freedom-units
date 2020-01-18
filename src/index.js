// import 'babel-polyfill';

// import metricDistanceUnits from './units.js';
// import currencies from './units.js';  //// Not working

const metricDistanceUnits = [
  'Millimeter', 'Centimeter', 'Meter', 'Kilometer'
];

const imperialDistanceUnits = [
  'Inch', 'Foot', 'Yard', 'Mile'
];

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

function handleSelectValues(e) {
  if (e.target.classList.contains('select_top')) {
  let selectedTopIndex = e.target.options.selectedIndex;
  selectTopValue = (e.target.options[selectedTopIndex].value)
  }

  if (e.target.classList.contains('select_bottom')) {
  let selectedBottomIndex = e.target.options.selectedIndex;
  selectBottomValue = (e.target.options[selectedBottomIndex].value)
  }
 }

function createSelectEventListeners(selects) {
  let topSelect = selects[0];
  let bottomSelect = selects[1];

  topSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e);
  })

  bottomSelect.addEventListener('change', function(e) {
    if (e.target.classList.contains('amount_top')) return;
    if (e.target.classList.contains('amount_bottom')) return;
    handleSelectValues(e);
  })
}


function convertUnits(topValue, bottomValue) {
    console.log(selectTopValue);
    console.log(selectBottomValue);
    console.log(topValue);
    console.log(bottomValue);
}

function createInputsEventListeners(inputs) {
  let topInput = inputs[0];
  let bottomInput = inputs[1];
  let inputTopValue = [];
  let inputBottomValue = [];

  topInput.addEventListener('keyup', function() {
    inputTopValue = topInput.value;
    convertUnits(inputTopValue, inputBottomValue)
  })

  bottomInput.addEventListener('keyup', function() {
    inputBottomValue = bottomInput.value;
    convertUnits(inputTopValue, inputBottomValue)
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

  // console.log(specificSelects, specificInputs);

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
    case 'DISTANCE': return [metricDistanceUnits, imperialDistanceUnits];
      break;
    case 'LIQUID': return [placeholderArray, placeholderArray];
      break;
    case 'TEMPERATURE': return [placeholderArray, placeholderArray];
      break;
    case 'WEIGHT': return [placeholderArray, placeholderArray];
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
  <div class='inputs-select slide-down' style="width: 40%; margin-top: -25px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Unit Type</label>
            <select class="distance-select select_top" id="distance-select" style="width: 130px; height: 35px">
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
  <div class='inputs-select slide-up' style="width: 40%; margin-bottom: -20px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Unit Type</label>
            <select class="select_bottom" id="distance-select" style="width: 130px; height: 35px;">
            <option selected="selected">Select a unit</option>
                ${optionsBottomHTML.join('')}
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
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
