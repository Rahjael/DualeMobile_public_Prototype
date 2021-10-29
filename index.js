function getSizes() {
  return {width: window.innerWidth, height: window.innerHeight}
}

function printSizes() {
  const h1 = document.querySelector('#label');
  const sizes = getSizes();
  h1.innerText = sizes.width + "x" + sizes.height + " " + screen.orientation.angle;
}


screen.orientation.addEventListener('change', (event) => {
  printSizes();
  document.querySelector('#angle').innerText = event;
  document.querySelector('#third').innerText = "event";
});




// const accelerometer = new Accelerometer({frequency: 10});
// accelerometer.addEventListener('reading', () => {
//   const h1 = document.querySelector('#angle');
//   const sizes = getSizes();
//   h1.innerText = ;

// })

printSizes();



// document.querySelector('#label').innerText = "ciao";