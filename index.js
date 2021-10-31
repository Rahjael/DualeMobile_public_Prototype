




function beginMoving(e) {
  bluSquare.onpointermove = moveSquare;
  bluSquare.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  bluSquare.onpointermove = null;
  bluSquare.releasePointerCapture(e.pointerId);
}

function moveSquare(e) {
  bluSquare.style.transform = `translate(${e.clientX - bluSquare.offsetLeft}px, ${e.clientY}px)`;

  document.querySelector('#label').innerText = `${e.clientX} x ${e.clientY}`;

  console.log("pointer: ", e.clientX, e.clientY);
  console.log("square: ", bluSquare.style.offsetX, bluSquare.style.bottom);
}


const bluSquare = document.querySelector('#square');

bluSquare.onpointerdown = beginSliding;
bluSquare.onpointerup = stopSliding;

console.log(bluSquare);




document.querySelector('#angle').innerText = window.PointerEvent;











// function getSizes() {
//   return {width: window.innerWidth, height: window.innerHeight}
// }

// function printSizes() {
//   const h1 = document.querySelector('#label');
//   const sizes = getSizes();
//   h1.innerText = sizes.width + "x" + sizes.height + " " + screen.orientation.angle;
// }


// screen.orientation.addEventListener('change', (event) => {
//   printSizes();
//   document.querySelector('#angle').innerText = "gamma rotation: " + event.gamma;
//   document.querySelector('#third').innerText = "event";
// });




// // const accelerometer = new Accelerometer({frequency: 10});
// // accelerometer.addEventListener('reading', () => {
// //   const h1 = document.querySelector('#angle');
// //   const sizes = getSizes();
// //   h1.innerText = ;

// // })

// printSizes();



// document.querySelector('#label').innerText = "ciao";