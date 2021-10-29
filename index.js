function getSizes() {
  return {width: window.innerWidth, height: window.innerHeight}
}

function printSizes() {  
  const h1 = document.querySelector('#label');
  const sizes = getSizes();
  h1.innerText = sizes.width + "x" + sizes.height + " " + screen.orientation.type;
}


screen.orientation.addEventListener('change', () => {
  printSizes();
});


printSizes();



// document.querySelector('#label').innerText = "ciao";