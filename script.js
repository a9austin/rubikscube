document.addEventListener('DOMContentLoaded', function() {





// Initial rotation values for the whole cube
let xRotation = -30;
let yRotation = -45;

// State representation for each face of the cube
let cubeState = {
    front: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
    right: ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
    top: ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
    left: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange'],
    bottom: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    back: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green']
    // Add similar arrays for left, bottom, and back faces
};

// Function to rotate the whole cube
function rotateCube(direction) {
    const cube = document.querySelector('.rubiks-cube');
    if (direction === 'ArrowUp') {
        xRotation += 10;
    } else if (direction === 'ArrowDown') {
        xRotation -= 10;
    } else if (direction === 'ArrowRight') {
        yRotation += 10;
    } else if (direction === 'ArrowLeft') {
        yRotation -= 10;
    }
    cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
}

// Function to rotate the top row of the front face to the right (clockwise)
function rotateTopRowFrontClockwise() {

    let topRow = document.querySelector('.top-row'); // Ensure you have a 'top-row' class defined for the top row
    topRow.style.animation = 'rotateTopRowClockwise 0.5s forwards';

    // Temporary storage for the top row of each affected face
    let tempFrontTop = cubeState.front.slice(0, 3);
    let tempRightTop = cubeState.right.slice(0, 3);
    let tempBackTop = cubeState.back.slice(0, 3);
    let tempLeftTop = cubeState.left.slice(0, 3);

    // Rotate the top row clockwise
    cubeState.front[0] = tempLeftTop[0];
    cubeState.front[1] = tempLeftTop[1];
    cubeState.front[2] = tempLeftTop[2];

    cubeState.right[0] = tempFrontTop[0];
    cubeState.right[1] = tempFrontTop[1];
    cubeState.right[2] = tempFrontTop[2];

    cubeState.back[0] = tempRightTop[0];
    cubeState.back[1] = tempRightTop[1];
    cubeState.back[2] = tempRightTop[2];

    cubeState.left[0] = tempBackTop[0];
    cubeState.left[1] = tempBackTop[1];
    cubeState.left[2] = tempBackTop[2];

    // Update the visual representation
    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');

    // Remove the animation style after completion
    setTimeout(() => {
        topRow.style.animation = '';
    }, 500); // Match the timeout with the animation duration


}

// Function to rotate the top row of the front face to the left (counterclockwise)
function rotateTopRowFrontCounterclockwise() {
    // Temporary storage for the top row of each affected face
    let tempFrontTop = cubeState.front.slice(0, 3);
    let tempRightTop = cubeState.right.slice(0, 3);
    let tempBackTop = cubeState.back.slice(0, 3);
    let tempLeftTop = cubeState.left.slice(0, 3);

    // Rotate the top row counterclockwise
    cubeState.front[0] = tempRightTop[0];
    cubeState.front[1] = tempRightTop[1];
    cubeState.front[2] = tempRightTop[2];

    cubeState.right[0] = tempBackTop[0];
    cubeState.right[1] = tempBackTop[1];
    cubeState.right[2] = tempBackTop[2];

    cubeState.back[0] = tempLeftTop[0];
    cubeState.back[1] = tempLeftTop[1];
    cubeState.back[2] = tempLeftTop[2];

    cubeState.left[0] = tempFrontTop[0];
    cubeState.left[1] = tempFrontTop[1];
    cubeState.left[2] = tempFrontTop[2];

    // Update the visual representation
    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');
}

function rotateMiddleRowFrontClockwise() {
    // Temporary storage for the middle row of each affected face
    let tempFrontMiddle = cubeState.front.slice(3, 6);
    let tempRightMiddle = cubeState.right.slice(3, 6);
    let tempBackMiddle = cubeState.back.slice(3, 6);
    let tempLeftMiddle = cubeState.left.slice(3, 6);

    // Rotate the middle row clockwise
    cubeState.front[3] = tempLeftMiddle[0];
    cubeState.front[4] = tempLeftMiddle[1];
    cubeState.front[5] = tempLeftMiddle[2];

    cubeState.right[3] = tempFrontMiddle[0];
    cubeState.right[4] = tempFrontMiddle[1];
    cubeState.right[5] = tempFrontMiddle[2];

    cubeState.back[3] = tempRightMiddle[0];
    cubeState.back[4] = tempRightMiddle[1];
    cubeState.back[5] = tempRightMiddle[2];

    cubeState.left[3] = tempBackMiddle[0];
    cubeState.left[4] = tempBackMiddle[1];
    cubeState.left[5] = tempBackMiddle[2];

    // Update the visual representation
    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');
}

function rotateMiddleRowFrontCounterclockwise() {
    // Temporary storage for the middle row of each affected face
    let tempFrontMiddle = cubeState.front.slice(3, 6);
    let tempRightMiddle = cubeState.right.slice(3, 6);
    let tempBackMiddle = cubeState.back.slice(3, 6);
    let tempLeftMiddle = cubeState.left.slice(3, 6);

    // Rotate the middle row counterclockwise
    cubeState.front[3] = tempRightMiddle[0];
    cubeState.front[4] = tempRightMiddle[1];
    cubeState.front[5] = tempRightMiddle[2];

    cubeState.right[3] = tempBackMiddle[0];
    cubeState.right[4] = tempBackMiddle[1];
    cubeState.right[5] = tempBackMiddle[2];

    cubeState.back[3] = tempLeftMiddle[0];
    cubeState.back[4] = tempLeftMiddle[1];
    cubeState.back[5] = tempLeftMiddle[2];

    cubeState.left[3] = tempFrontMiddle[0];
    cubeState.left[4] = tempFrontMiddle[1];
    cubeState.left[5] = tempFrontMiddle[2];

    // Update the visual representation
    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');
}

function rotateBottomRowFrontClockwise() {
    let tempFrontBottom = cubeState.front.slice(6, 9);
    let tempRightBottom = cubeState.right.slice(6, 9);
    let tempBackBottom = cubeState.back.slice(6, 9);
    let tempLeftBottom = cubeState.left.slice(6, 9);

    // Rotate the bottom row clockwise
    cubeState.front[6] = tempLeftBottom[0];
    cubeState.front[7] = tempLeftBottom[1];
    cubeState.front[8] = tempLeftBottom[2];

    cubeState.right[6] = tempFrontBottom[0];
    cubeState.right[7] = tempFrontBottom[1];
    cubeState.right[8] = tempFrontBottom[2];

    cubeState.back[6] = tempRightBottom[0];
    cubeState.back[7] = tempRightBottom[1];
    cubeState.back[8] = tempRightBottom[2];

    cubeState.left[6] = tempBackBottom[0];
    cubeState.left[7] = tempBackBottom[1];
    cubeState.left[8] = tempBackBottom[2];

    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');
}

function rotateBottomRowFrontCounterclockwise() {
    let tempFrontBottom = cubeState.front.slice(6, 9);
    let tempRightBottom = cubeState.right.slice(6, 9);
    let tempBackBottom = cubeState.back.slice(6, 9);
    let tempLeftBottom = cubeState.left.slice(6, 9);

    // Rotate the bottom row counterclockwise
    cubeState.front[6] = tempRightBottom[0];
    cubeState.front[7] = tempRightBottom[1];
    cubeState.front[8] = tempRightBottom[2];

    cubeState.right[6] = tempBackBottom[0];
    cubeState.right[7] = tempBackBottom[1];
    cubeState.right[8] = tempBackBottom[2];

    cubeState.back[6] = tempLeftBottom[0];
    cubeState.back[7] = tempLeftBottom[1];
    cubeState.back[8] = tempLeftBottom[2];

    cubeState.left[6] = tempFrontBottom[0];
    cubeState.left[7] = tempFrontBottom[1];
    cubeState.left[8] = tempFrontBottom[2];

    updateFace('front');
    updateFace('right');
    updateFace('back');
    updateFace('left');
}

function rotateLeftColumnFrontClockwise() {
    let tempFrontLeft = [cubeState.front[0], cubeState.front[3], cubeState.front[6]];
    let tempBottomLeft = [cubeState.bottom[0], cubeState.bottom[3], cubeState.bottom[6]];
    let tempBackLeft = [cubeState.back[8], cubeState.back[5], cubeState.back[2]]; // Note the reversed order
    let tempTopLeft = [cubeState.top[0], cubeState.top[3], cubeState.top[6]];

    // Perform the rotation
    cubeState.front[0] = tempTopLeft[0];
    cubeState.front[3] = tempTopLeft[1];
    cubeState.front[6] = tempTopLeft[2];

    cubeState.bottom[0] = tempFrontLeft[0];
    cubeState.bottom[3] = tempFrontLeft[1];
    cubeState.bottom[6] = tempFrontLeft[2];

    cubeState.back[8] = tempBottomLeft[0];
    cubeState.back[5] = tempBottomLeft[1];
    cubeState.back[2] = tempBottomLeft[2];

    cubeState.top[0] = tempBackLeft[0];
    cubeState.top[3] = tempBackLeft[1];
    cubeState.top[6] = tempBackLeft[2];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateLeftColumnFrontCounterclockwise() {
    let tempFrontLeft = [cubeState.front[0], cubeState.front[3], cubeState.front[6]];
    let tempBottomLeft = [cubeState.bottom[0], cubeState.bottom[3], cubeState.bottom[6]];
    let tempBackLeft = [cubeState.back[8], cubeState.back[5], cubeState.back[2]]; // Note the reversed order
    let tempTopLeft = [cubeState.top[0], cubeState.top[3], cubeState.top[6]];

    // Perform the rotation
    cubeState.front[0] = tempBottomLeft[0];
    cubeState.front[3] = tempBottomLeft[1];
    cubeState.front[6] = tempBottomLeft[2];

    cubeState.bottom[0] = tempBackLeft[0];
    cubeState.bottom[3] = tempBackLeft[1];
    cubeState.bottom[6] = tempBackLeft[2];

    cubeState.back[8] = tempTopLeft[0];
    cubeState.back[5] = tempTopLeft[1];
    cubeState.back[2] = tempTopLeft[2];

    cubeState.top[0] = tempFrontLeft[0];
    cubeState.top[3] = tempFrontLeft[1];
    cubeState.top[6] = tempFrontLeft[2];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateMiddleColumnFrontClockwise() {
    let tempFrontMiddle = [cubeState.front[1], cubeState.front[4], cubeState.front[7]];
    let tempTopMiddle = [cubeState.top[1], cubeState.top[4], cubeState.top[7]];
    let tempBackMiddle = [cubeState.back[7], cubeState.back[4], cubeState.back[1]]; // Reversed order
    let tempBottomMiddle = [cubeState.bottom[1], cubeState.bottom[4], cubeState.bottom[7]];

    // Perform the rotation
    cubeState.front[1] = tempBottomMiddle[0];
    cubeState.front[4] = tempBottomMiddle[1];
    cubeState.front[7] = tempBottomMiddle[2];

    cubeState.top[1] = tempFrontMiddle[0];
    cubeState.top[4] = tempFrontMiddle[1];
    cubeState.top[7] = tempFrontMiddle[2];

    cubeState.back[7] = tempTopMiddle[0];
    cubeState.back[4] = tempTopMiddle[1];
    cubeState.back[1] = tempTopMiddle[2];

    cubeState.bottom[1] = tempBackMiddle[2];
    cubeState.bottom[4] = tempBackMiddle[1];
    cubeState.bottom[7] = tempBackMiddle[0];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateMiddleColumnFrontCounterclockwise() {
    let tempFrontMiddle = [cubeState.front[1], cubeState.front[4], cubeState.front[7]];
    let tempTopMiddle = [cubeState.top[1], cubeState.top[4], cubeState.top[7]];
    let tempBackMiddle = [cubeState.back[7], cubeState.back[4], cubeState.back[1]]; // Reversed order
    let tempBottomMiddle = [cubeState.bottom[1], cubeState.bottom[4], cubeState.bottom[7]];

    // Perform the rotation
    cubeState.front[1] = tempTopMiddle[0];
    cubeState.front[4] = tempTopMiddle[1];
    cubeState.front[7] = tempTopMiddle[2];

    cubeState.top[1] = tempBackMiddle[2];
    cubeState.top[4] = tempBackMiddle[1];
    cubeState.top[7] = tempBackMiddle[0];

    cubeState.back[7] = tempBottomMiddle[0];
    cubeState.back[4] = tempBottomMiddle[1];
    cubeState.back[1] = tempBottomMiddle[2];

    cubeState.bottom[1] = tempFrontMiddle[0];
    cubeState.bottom[4] = tempFrontMiddle[1];
    cubeState.bottom[7] = tempFrontMiddle[2];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateRightColumnFrontClockwise() {
    let tempFrontRight = [cubeState.front[2], cubeState.front[5], cubeState.front[8]];
    let tempTopRight = [cubeState.top[2], cubeState.top[5], cubeState.top[8]];
    let tempBackRight = [cubeState.back[6], cubeState.back[3], cubeState.back[0]]; // Note the reversed order
    let tempBottomRight = [cubeState.bottom[2], cubeState.bottom[5], cubeState.bottom[8]];

    // Rotate the right column clockwise
    cubeState.front[2] = tempBottomRight[0];
    cubeState.front[5] = tempBottomRight[1];
    cubeState.front[8] = tempBottomRight[2];

    cubeState.top[2] = tempFrontRight[0];
    cubeState.top[5] = tempFrontRight[1];
    cubeState.top[8] = tempFrontRight[2];

    cubeState.back[6] = tempTopRight[0];
    cubeState.back[3] = tempTopRight[1];
    cubeState.back[0] = tempTopRight[2];

    cubeState.bottom[2] = tempBackRight[2];
    cubeState.bottom[5] = tempBackRight[1];
    cubeState.bottom[8] = tempBackRight[0];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateRightColumnFrontClockwise() {
    let tempFrontRight = [cubeState.front[2], cubeState.front[5], cubeState.front[8]];
    let tempTopRight = [cubeState.top[2], cubeState.top[5], cubeState.top[8]];
    let tempBackRight = [cubeState.back[6], cubeState.back[3], cubeState.back[0]]; // Note the reversed order
    let tempBottomRight = [cubeState.bottom[2], cubeState.bottom[5], cubeState.bottom[8]];

    // Rotate the right column clockwise
    cubeState.front[2] = tempBottomRight[0];
    cubeState.front[5] = tempBottomRight[1];
    cubeState.front[8] = tempBottomRight[2];

    cubeState.top[2] = tempFrontRight[0];
    cubeState.top[5] = tempFrontRight[1];
    cubeState.top[8] = tempFrontRight[2];

    cubeState.back[6] = tempTopRight[0];
    cubeState.back[3] = tempTopRight[1];
    cubeState.back[0] = tempTopRight[2];

    cubeState.bottom[2] = tempBackRight[2];
    cubeState.bottom[5] = tempBackRight[1];
    cubeState.bottom[8] = tempBackRight[0];

    updateFace('front');
    updateFace('top');
    updateFace('back');
    updateFace('bottom');
}

function rotateFrontFaceClockwise() {
    // addRotationAnimation('front', 'clockwise');
    // Your existing rotation logic here...
    setTimeout(() => removeRotationAnimation('front', 'clockwise'), 500); // Assuming 0.5s animation


    let tempTop = cubeState.top.slice(6, 9);
    let tempRight = [cubeState.right[0], cubeState.right[3], cubeState.right[6]];
    let tempBottom = cubeState.bottom.slice(0, 3);
    let tempLeft = [cubeState.left[2], cubeState.left[5], cubeState.left[8]];

    // Rotate front face
    let oldFront = [...cubeState.front];
    cubeState.front = [
        oldFront[6], oldFront[3], oldFront[0],
        oldFront[7], oldFront[4], oldFront[1],
        oldFront[8], oldFront[5], oldFront[2]
    ];

    // Adjust adjacent faces
    cubeState.top[6] = tempLeft[0];
    cubeState.top[7] = tempLeft[1];
    cubeState.top[8] = tempLeft[2];

    cubeState.right[0] = tempTop[0];
    cubeState.right[3] = tempTop[1];
    cubeState.right[6] = tempTop[2];

    cubeState.bottom[0] = tempRight[2];
    cubeState.bottom[1] = tempRight[1];
    cubeState.bottom[2] = tempRight[0];

    cubeState.left[2] = tempBottom[2];
    cubeState.left[5] = tempBottom[1];
    cubeState.left[8] = tempBottom[0];

    updateFace('front');
    updateFace('top');
    updateFace('right');
    updateFace('bottom');
    updateFace('left');
}

function rotateFrontFaceCounterclockwise() {
    let tempTop = cubeState.top.slice(6, 9);
    let tempRight = [cubeState.right[0], cubeState.right[3], cubeState.right[6]];
    let tempBottom = cubeState.bottom.slice(0, 3);
    let tempLeft = [cubeState.left[2], cubeState.left[5], cubeState.left[8]];

    // Rotate front face counterclockwise
    let oldFront = [...cubeState.front];
    cubeState.front = [
        oldFront[2], oldFront[5], oldFront[8],
        oldFront[1], oldFront[4], oldFront[7],
        oldFront[0], oldFront[3], oldFront[6]
    ];

    // Adjust adjacent faces
    cubeState.top[6] = tempRight[0];
    cubeState.top[7] = tempRight[1];
    cubeState.top[8] = tempRight[2];

    cubeState.right[0] = tempBottom[2];
    cubeState.right[3] = tempBottom[1];
    cubeState.right[6] = tempBottom[0];

    cubeState.bottom[0] = tempLeft[2];
    cubeState.bottom[1] = tempLeft[1];
    cubeState.bottom[2] = tempLeft[0];

    cubeState.left[2] = tempTop[2];
    cubeState.left[5] = tempTop[1];
    cubeState.left[8] = tempTop[0];

    updateFace('front');
    updateFace('top');
    updateFace('right');
    updateFace('bottom');
    updateFace('left');
}

function rotateBackFaceClockwise() {
    let tempTop = cubeState.top.slice(0, 3);
    let tempRight = [cubeState.right[2], cubeState.right[5], cubeState.right[8]];
    let tempBottom = cubeState.bottom.slice(6, 9);
    let tempLeft = [cubeState.left[0], cubeState.left[3], cubeState.left[6]];

    // Rotate back face clockwise
    let oldBack = [...cubeState.back];
    cubeState.back = [
        oldBack[6], oldBack[3], oldBack[0],
        oldBack[7], oldBack[4], oldBack[1],
        oldBack[8], oldBack[5], oldBack[2]
    ];

    // Adjust adjacent faces
    cubeState.top[0] = tempRight[0];
    cubeState.top[1] = tempRight[1];
    cubeState.top[2] = tempRight[2];

    cubeState.right[2] = tempBottom[2];
    cubeState.right[5] = tempBottom[1];
    cubeState.right[8] = tempBottom[0];

    cubeState.bottom[6] = tempLeft[2];
    cubeState.bottom[7] = tempLeft[1];
    cubeState.bottom[8] = tempLeft[0];

    cubeState.left[0] = tempTop[0];
    cubeState.left[3] = tempTop[1];
    cubeState.left[6] = tempTop[2];

    updateFace('back');
    updateFace('top');
    updateFace('right');
    updateFace('bottom');
    updateFace('left');
}

function rotateBackFaceCounterclockwise() {
    let tempTop = cubeState.top.slice(0, 3);
    let tempRight = [cubeState.right[2], cubeState.right[5], cubeState.right[8]];
    let tempBottom = cubeState.bottom.slice(6, 9);
    let tempLeft = [cubeState.left[0], cubeState.left[3], cubeState.left[6]];

    // Rotate back face counterclockwise
    let oldBack = [...cubeState.back];
    cubeState.back = [
        oldBack[2], oldBack[5], oldBack[8],
        oldBack[1], oldBack[4], oldBack[7],
        oldBack[0], oldBack[3], oldBack[6]
    ];

    // Adjust adjacent faces
    cubeState.top[0] = tempLeft[0];
    cubeState.top[1] = tempLeft[1];
    cubeState.top[2] = tempLeft[2];

    cubeState.right[2] = tempTop[0];
    cubeState.right[5] = tempTop[1];
    cubeState.right[8] = tempTop[2];

    cubeState.bottom[6] = tempRight[2];
    cubeState.bottom[7] = tempRight[1];
    cubeState.bottom[8] = tempRight[0];

    cubeState.left[0] = tempBottom[2];
    cubeState.left[3] = tempBottom[1];
    cubeState.left[6] = tempBottom[0];

    updateFace('back');
    updateFace('top');
    updateFace('right');
    updateFace('bottom');
    updateFace('left');
}



// Functions to rotate each face clockwise
function rotateFaceClockwise(face) {
    let oldState = [...cubeState[face]];
    cubeState[face] = [
        oldState[6], oldState[3], oldState[0],
        oldState[7], oldState[4], oldState[1],
        oldState[8], oldState[5], oldState[2]
    ];
    updateFace(face);
}

// Function to update the visual representation of a face
function updateFace(face) {
    for (let i = 1; i <= 9; i++) {
        let cube = document.getElementById(face + '-' + i);
        if (cube) {
            cube.style.backgroundColor = cubeState[face][i - 1];
            console.log(`Updating ${face}-${i} to ${cubeState[face][i - 1]}`);
        } else {
            console.error("Element not found:", face + '-' + i);
        }
    }
}

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
        rotateTopRowFrontClockwise();
    } else if (event.key === 'T') {
        rotateTopRowFrontCounterclockwise();
    }
    else if (event.key === 'm') {
        rotateMiddleRowFrontClockwise();
    } else if (event.key === 'M') {
        rotateMiddleRowFrontCounterclockwise();
    }

    else if (event.key === 'b') {
        rotateBottomRowFrontClockwise();
    } else if (event.key === 'B') {
        rotateBottomRowFrontCounterclockwise();
    }

    else if (event.key === 'y') {
        rotateLeftColumnFrontClockwise();
    } else if (event.key === 'Y') {
        rotateLeftColumnFrontCounterclockwise();
    }

    else if (event.key === 'n') {
        rotateMiddleColumnFrontClockwise();
    } else if (event.key === 'N') {
        rotateMiddleColumnFrontCounterclockwise();
    }

    else if (event.key === 'k') {
        rotateRightColumnFrontClockwise();
    } else if (event.key === 'K') {
        rotateRightColumnFrontCounterclockwise();
    }

    else if (event.key === 'f') {
        rotateFrontFaceClockwise();
    } else if (event.key === 'F') {
        rotateFrontFaceCounterclockwise();
    }

    else if (event.key === 'v') {
        rotateBackFaceClockwise();
    } else if (event.key === 'V') {
        rotateBackFaceCounterclockwise();
    }

    // Handling overall cube rotations
    else if (event.key === 'ArrowUp') {
        rotateCube('ArrowUp');
    } else if (event.key === 'ArrowDown') {
        rotateCube('ArrowDown');
    } else if (event.key === 'ArrowRight') {
        rotateCube('ArrowRight');
    } else if (event.key === 'ArrowLeft') {
        rotateCube('ArrowLeft');
    }
});


// Initial render of the cube
updateFace('front');
updateFace('right');
updateFace('top');
// Add initial render calls for other faces


// Animations

function addRotationAnimation(face, direction) {
    const faceElement = document.querySelector('.' + face);
    if (faceElement) {
        faceElement.classList.add('rotate-' + direction);
    }
}

function removeRotationAnimation(face, direction) {
    const faceElement = document.querySelector('.' + face);
    if (faceElement) {
        faceElement.classList.remove('rotate-' + direction);
    }
}

// Shuffling Logic

function shuffleCube() {
    const numShuffles = 20; // Number of shuffle moves
    const rotationFunctions = [
        rotateTopRowFrontClockwise, rotateTopRowFrontCounterclockwise,
        rotateMiddleRowFrontClockwise, rotateMiddleRowFrontCounterclockwise,
        rotateBottomRowFrontClockwise, rotateBottomRowFrontCounterclockwise,
        rotateLeftColumnFrontClockwise, rotateLeftColumnFrontCounterclockwise,
        rotateMiddleColumnFrontClockwise, rotateMiddleColumnFrontCounterclockwise,
        rotateRightColumnFrontClockwise, rotateRightColumnFrontClockwise,
        rotateFrontFaceClockwise, rotateFrontFaceCounterclockwise,
        rotateBackFaceClockwise, rotateBackFaceCounterclockwise
        // Include other rotation functions if any
    ];

    function performShuffleStep(step) {
        if (step < numShuffles) {
            const randomRotationFunction = rotationFunctions[Math.floor(Math.random() * rotationFunctions.length)];
            randomRotationFunction();
            setTimeout(() => performShuffleStep(step + 1), 200); // Reduced to 200ms for faster shuffling
            console.log(`Shuffling step ${step + 1}: Executing ${randomRotationFunction.name}`);
        }
        else {
            console.log("Shuffle completed.");
        }

    }

    performShuffleStep(0);
}

document.getElementById('shuffleButton').addEventListener('click', shuffleCube);


// Mouse Click Logic


// Add these event listeners to the cube or its rows/columns
document.querySelectorAll('.small-cube').forEach(cube => {
    cube.addEventListener('mousedown', onMouseDown);
});

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

let isDragging = false;
let dragStartX, dragStartY;

function onMouseDown(event) {
    // Example: Getting the clicked cube's ID
    let clickedCubeId = event.target.id;
    if (clickedCubeId) {
        let [face, segment] = clickedCubeId.split('-');
        selectedFace = face;
        selectedSegment = parseInt(segment, 10); // Convert segment to an integer

        console.log(`Clicked on face: ${selectedFace}, segment: ${selectedSegment}`);
    }

    dragStartX = event.clientX;
    dragStartY = event.clientY;
    isDragging = true;
}

function onMouseMove(event) {
    if (!isDragging) return;
    
    // Calculate the distance dragged in x and y direction
    let currentX = event.clientX;
    let currentY = event.clientY;
    let dx = currentX - dragStartX;
    let dy = currentY - dragStartY;

    // console.log(`Mouse moved to (${currentX}, ${currentY}) - Drag distance: (${dx}, ${dy})`);


    // Determine drag direction
    if (Math.abs(dx) > Math.abs(dy)) {
        dragDirection = 'horizontal';
    } else {
        dragDirection = 'vertical';
    }

    console.log(`Dragging: ${dragDirection}`);
}

function onMouseUp(event) {
    if (!isDragging) return;

    let segmentInfo = getRowOrColumn(selectedFace, selectedSegment);
    let endX = event.clientX;
    let endY = event.clientY;
    let dx = endX - dragStartX;
    let dy = endY - dragStartY;

    isDragging = false;

    // Check if the drag is significant enough to be considered a rotation
    if (Math.abs(dx) > 20 || Math.abs(dy) > 20) {
        if (segmentInfo.type === 'row') {
            if (segmentInfo.index === 1) {
                dragDirection === 'horizontal' ? rotateTopRowFrontClockwise() : rotateTopRowFrontCounterclockwise();
            } else if (segmentInfo.index === 2) {
                dragDirection === 'horizontal' ? rotateMiddleRowFrontClockwise() : rotateMiddleRowFrontCounterclockwise();
            } else if (segmentInfo.index === 3) {
                dragDirection === 'horizontal' ? rotateBottomRowFrontClockwise() : rotateBottomRowFrontCounterclockwise();
            }
        } else if (segmentInfo.type === 'column') {
            if (segmentInfo.index === 1) {
                dragDirection === 'vertical' ? rotateLeftColumnFrontClockwise() : rotateLeftColumnFrontCounterclockwise();
            } else if (segmentInfo.index === 2) {
                dragDirection === 'vertical' ? rotateMiddleColumnFrontClockwise() : rotateMiddleColumnFrontCounterclockwise();
            } else if (segmentInfo.index === 3) {
                dragDirection === 'vertical' ? rotateRightColumnFrontClockwise() : rotateRightColumnFrontCounterclockwise();
            }
        }
    }

    // Reset drag state
    selectedFace = null;
    selectedSegment = null;
    dragDirection = null;
    dragStartX = 0;
    dragStartY = 0;
}

function getRowOrColumn(face, segment) {
    // Assuming a 3x3 cube
    // Determine row
    if (segment <= 3) {
        return { type: 'row', index: 1 }; // Top row
    } else if (segment > 3 && segment <= 6) {
        return { type: 'row', index: 2 }; // Middle row
    } else {
        return { type: 'row', index: 3 }; // Bottom row
    }

    // Determine column (if needed)
    if ([1, 4, 7].includes(segment)) {
        return { type: 'column', index: 1 }; // Left column
    } else if ([2, 5, 8].includes(segment)) {
        return { type: 'column', index: 2 }; // Middle column
    } else if ([3, 6, 9].includes(segment)) {
        return { type: 'column', index: 3 }; // Right column
    }
}



});
