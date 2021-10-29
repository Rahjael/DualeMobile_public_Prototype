function getSizes() {
  return {width: window.innerWidth, height: window.innerHeight}
}

function printSizes() {  
  const h1 = document.querySelector('#label');
  const sizes = getSizes();
  h1.innerText = sizes.width + "x" + sizes.height + " " + screen.orientation;
}


screen.orientation.addEventListener('change', () => {
  printSizes();
});


printSizes();

console.log("Orientation: ", screen.orientation);


// document.querySelector('#label').innerText = "ciao";