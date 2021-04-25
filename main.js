let counter = numberInput.value
let interval = 1000;
let tmout;

const runStr = 'Run';
const stopStr = 'Stop';

toggleButton.innerText = runStr;
toggleButton.addEventListener('click', function() {
  if (this.innerText === runStr) {
    this.innerText = stopStr;
    run();
  } else {
    clearTimeout(tmout);
    this.innerText = runStr;
  }
});
setNumber.addEventListener('submit', (e) => { e.preventDefault(); renderNumber(numberInput.value); });
numberInput.addEventListener('change', (e) => { renderNumber(numberInput.value); });
numberInput.addEventListener('keyup', (e) => { renderNumber(numberInput.value); });

function renderNumber(number) {
  counter = Number(number);
  render(counter);
}

function run() {
  if (counter >= 9999) {
    toggleButton.innerText = runStr;
    return;
  }

  interval = 1000;
  counter++;
  render(counter);
  numberInput.value = counter;

  if (counter > 9) {
    interval = 100;
  }
  if (counter > 99) {
    interval = 10;
  }
  if (counter > 999) {
    interval = 1;
  }
  if (counter <= 9999) {
    tmout = setTimeout(run, interval);
  }
};
render(counter);
