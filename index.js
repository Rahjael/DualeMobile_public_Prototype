

const bluSquare = document.querySelector('#square');



if(window.PointerEvent) {
  // Add Pointer Event Listener
  bluSquare.addEventListener('pointerdown', this.handleGestureStart, true);
  bluSquare.addEventListener('pointermove', this.handleGestureMove, true);
  bluSquare.addEventListener('pointerup', this.handleGestureEnd, true);
  bluSquare.addEventListener('pointercancel', this.handleGestureEnd, true);
} else {
  // Add Touch Listener
  bluSquare.addEventListener('touchstart', this.handleGestureStart, true);
  bluSquare.addEventListener('touchmove', this.handleGestureMove, true);
  bluSquare.addEventListener('touchend', this.handleGestureEnd, true);
  bluSquare.addEventListener('touchcancel', this.handleGestureEnd, true);

  // Add Mouse Listener
  bluSquare.addEventListener('mousedown', this.handleGestureStart, true);
}


// Handle the start of gestures
this.handleGestureStart = function(event) {
  event.preventDefault();

  if(event.touches && event.touches.length > 1) {
    return;
  }

  // Add the move and end listeners
  if (window.PointerEvent) {
    event.target.setPointerCapture(event.pointerId);
  } else {
    // Add Mouse Listeners
    document.addEventListener('mousemove', this.handleGestureMove, true);
    document.addEventListener('mouseup', this.handleGestureEnd, true);
  }

  initialTouchPos = getGesturePointFromEvent(event);

  bluSquare.style.transition = 'initial';
}.bind(this);


// Handle end gestures
this.handleGestureEnd = function(event) {
  event.preventDefault();

  if(event.touches && event.touches.length > 0) {
    return;
  }

  rafPending = false;

  // Remove Event Listeners
  if (window.PointerEvent) {
    event.target.releasePointerCapture(event.pointerId);
  } else {
    // Remove Mouse Listeners
    document.removeEventListener('mousemove', this.handleGestureMove, true);
    document.removeEventListener('mouseup', this.handleGestureEnd, true);
  }

  updateSwipeRestPosition();

  initialTouchPos = null;
}.bind(this);


function getGesturePointFromEvent(event) {
  var point = {};

  if(event.targetTouches) {
    // Prefer Touch Events
    point.x = event.targetTouches[0].clientX;
    point.y = event.targetTouches[0].clientY;
  } else {
    // Either Mouse event or Pointer Event
    point.x = event.clientX;
    point.y = event.clientY;
  }

  return point;
}


this.handleGestureMove = function (event) {
  event.preventDefault();

  if(!initialTouchPos) {
    return;
  }

  lastTouchPos = getGesturePointFromEvent(event);

  if(rafPending) {
    return;
  }

  rafPending = true;

  window.requestAnimFrame(onAnimFrame);
}.bind(this);


function onAnimFrame() {
  if(!rafPending) {
    return;
  }

  var differenceInX = initialTouchPos.x - lastTouchPos.x;

  var newXTransform = (currentXPosition - differenceInX)+'px';
  var transformStyle = 'translateX('+newXTransform+')';
  bluSquare.style.webkitTransform = transformStyle;
  bluSquare.style.MozTransform = transformStyle;
  bluSquare.style.msTransform = transformStyle;
  bluSquare.style.transform = transformStyle;

  rafPending = false;
}


























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
  document.querySelector('#angle').innerText = "gamma rotation: " + event.gamma;
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