const panels = document.querySelectorAll('.panel');
// const unitType = document.querySelectorAll('.unit-type');

function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function unitTypeMargin(e) {
  const unitDiv = e.currentTarget.querySelector('.unit-type');
  unitDiv.style.marginTop = "0px";
}

async function createInputs(e) {
  // console.log(e.currentTarget);
  const para1 = (e.currentTarget.firstElementChild);
  const para2 = (e.currentTarget.lastElementChild);
  await wait(500);
  const htmlTop = `
  <div class='inputs-select' style="width: 40%; margin-top: -30px">
          <div class="select" style="display: grid;">
            <label for="distance-unit-selection">Select Units</label>
            <select class="u-full-width" id="distance-select">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%">
            <label for="distance-input">Input Units</label>
            <input class="u-full-width" type="number" placeholder="" id="">
          </div>
  </div>
  `;
  const htmlBottom = `
  <div class='inputs-select' style="width: 40%; margin-bottom: -30px">
          <div class="select" style="display: grid;">
            <label for="distance-unit-selection">Select Units</label>
            <select class="u-full-width" id="distance-select">
                <option value="Option 1">Questions</option>
                <option value="Option 2">Admiration</option>
                <option value="Option 3">Can I get your number?</option>
            </select>
          </div>

          <div class="distance-input" style="display: grid; margin-left: 10%">
            <label for="distance-input">Input Units</label>
            <input class="u-full-width" type="number" placeholder="" id="">
          </div>
        </div>
      `
  para1.insertAdjacentHTML('afterend', htmlTop);
  para2.insertAdjacentHTML('beforebegin', htmlBottom);
}

function toggleOpen(e) {
  // console.log(e.currentTarget);
  // console.log(e.target);
  this.classList.toggle('open');
  unitTypeMargin(e);
  createInputs(e);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex'))
  this.classList.toggle('open-active');
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
})

panels.forEach(panel => {
  panel.addEventListener('transitionend', toggleActive);
})
