

let lastKnownScrollPosition = 0;
let ticking = false;
let currentlyHighlighted;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

function highlightCenterImage() {
  let centerPoint = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }

  // Look for center row
  let rows = Array.from(document.querySelectorAll('.photo-grid-row'));
  // console.log(rows);
  let targetRow = rows.find( row => {
    let boundingRect = row.getBoundingClientRect();
    return boundingRect.top < centerPoint.y && boundingRect.bottom > centerPoint.y;
  });
  // console.log(targetRow);
  // If no row is selected, return
  if(!targetRow) return;

  // Look for center image
  let images = Array.from(targetRow.querySelectorAll('.photo-grid-img'));
  // console.log(images);
  let targetImage = images.find( image => {
    let boundingRect = image.getBoundingClientRect();
    return boundingRect.top < centerPoint.y
      && boundingRect.bottom > centerPoint.y
      && boundingRect.left < centerPoint.x
      && boundingRect.right > centerPoint.x;
  });
  // console.log(targetImage);
  // If no image is selected
  if(!targetImage) {
    if(currentlyHighlighted)  {
      currentlyHighlighted.classList.remove('photo-grid-img-highlighted');
    }
    return;
  }

  // If image is different from previous
  if(targetImage != currentlyHighlighted) {
    if(currentlyHighlighted)  {
      currentlyHighlighted.classList.remove('photo-grid-img-highlighted');
    }
    targetImage.classList.add('photo-grid-img-highlighted');
    currentlyHighlighted = targetImage;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
document.addEventListener('scroll', function(e) {
  // console.log("Scrolling");
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      // doSomething(lastKnownScrollPosition);
      highlightCenterImage();
      ticking = false;
    });

    ticking = true;
  }
});





















// function beginMoving(e) {
//   bluSquare.onpointermove = moveSquare;
//   bluSquare.setPointerCapture(e.pointerId);
// }

// function stopSliding(e) {
//   bluSquare.onpointermove = null;
//   bluSquare.releasePointerCapture(e.pointerId);
// }

// function moveSquare(e) {
//   bluSquare.style.transform = `translate(${e.clientX - bluSquare.offsetLeft}px, ${e.clientY}px)`;

//   document.querySelector('#label').innerText = `${e.clientX} x ${e.clientY}`;

//   console.log("pointer: ", e.clientX, e.clientY);
//   console.log("square: ", bluSquare.style.offsetX, bluSquare.style.bottom);
// }


// const bluSquare = document.querySelector('#square');

// bluSquare.onpointerdown = beginSliding;
// bluSquare.onpointerup = stopSliding;

// console.log(bluSquare);




// document.querySelector('#angle').innerText = window.PointerEvent;











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