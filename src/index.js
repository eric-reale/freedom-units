// import 'babel-polyfill';

// import metricDistanceUnits from './units.js';
// import currencies from './units.js';  //// Not working

const panels = document.querySelectorAll('.panel');

// Wait function
function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function unitTypeMargin(e) {
  const unitDiv = e.currentTarget.querySelector('.unit-type');
  unitDiv.style.marginTop = "0px";
}

function createInputEventListeners() {
  const inputs = [
  ...Array.from(document.querySelectorAll('input')),
  ...Array.from(document.querySelectorAll('select')),
  ]
  return inputs;
  // inputs.forEach(input => {
  //   addEventListener('keydown', function() {
  //   console.log('here');
  // })
  // })
}

async function createInputs(e) {
  const para1 = (e.currentTarget.firstElementChild);
  const para2 = (e.currentTarget.lastElementChild);
  await wait(500);
  const htmlTop = `
  <div class='inputs-select slide-down' style="width: 40%; margin-top: -25px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Select Units</label>
            <select class="" id="distance-select" style="width: 120px;">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
            <input class="" type="number" style="width: 120px;" placeholder="" id="">
          </div>
  </div>
  `;
  const htmlBottom = `
  <div class='inputs-select slide-up' style="width: 40%; margin-bottom: -20px">
          <div class="select" style="display: grid; width: 120px;">
            <label for="distance-unit-selection">Select Units</label>
            <select class="" id="distance-select" style="width: 120px;">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%; width: 120px;">
            <label for="distance-input">Input Units</label>
            <input class="" type="number" style="width: 120px;" placeholder="" id="">
          </div>
        </div>
      `
  para1.insertAdjacentHTML('afterend', htmlTop);
  para2.insertAdjacentHTML('beforebegin', htmlBottom);
  createInputEventListeners();
}

function removeInputs() {
  const inputSelects = document.querySelectorAll('.inputs-select');
  inputSelects.forEach(input => input.parentNode.removeChild(input));
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
