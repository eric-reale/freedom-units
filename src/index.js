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

function convertUnits(inputs) {
  // console.log(inputs);
  const topInput = inputs.find(function(element) {
    return element.classList.contains("amount_top")
  })

  const topSelect = inputs.find(function(element) {
    return element.classList.contains("distance-select")
  })
  console.log(topSelect.value);
}

function createInputsArray() {
  const inputs = [
  ...Array.from(document.querySelectorAll('input')),
  ...Array.from(document.querySelectorAll('select')),
  ]
  convertUnits(inputs);

// neeed to make an on change event listener;

  // const topInput = inputs.find(function(element) {
  //   return element.classList.contains("amount_top")
  // })
  // console.log(topInput);
  // return inputs;
  // inputs.forEach(input => {
  //   addEventListener('keydown', function() {
  //   console.log('here');
  // })
  // })
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
            <label for="distance-unit-selection">Select Units</label>
            <select class="distance-select" id="distance-select" style="width: 120px; height: 35px">
            ${optionsTopHTML}
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
            <input name="amount_top" class="amount_top" type="number" style="width: 120px; height: 35px;" placeholder="" id="">
          </div>
  </div>
  `;

  // const selectClass = document.querySelector('.distance-select');

  const htmlBottom = `
  <div class='inputs-select slide-up' style="width: 40%; margin-bottom: -20px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Select Units</label>
            <select class="" id="distance-select" style="width: 120px; height: 35px;">
                ${optionsBottomHTML}
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
            <input class="" type="number" style="width: 120px; height: 35px;" placeholder="" id="">
          </div>
        </div>
      `
  para1.insertAdjacentHTML('afterend', htmlTop);
  para2.insertAdjacentHTML('beforebegin', htmlBottom);
  createInputsArray();
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
