// function to get random number between 1 and 2000
function getRandomNumber() {
    return Math.floor(Math.random() * 2000) + 1;
}

// function to get random value from list 
function getRandomValue(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const distanceDimensions = [ 'millimeter', 'centimeter', 'decimeter', 'meter', 'decameter', 'hectometer', 'kilometer' ];

// function to get random distance
function getRandomDistance() {
    return {
        value: getRandomNumber(),
        dimension: getRandomValue(distanceDimensions)
    };
}

// function to get random distance in string format
function getRandomDistanceString() {
    const distance = getRandomDistance();
    return `een afstand van ${distance.value} ${distance.dimension}`;
}

// function to populate element with class 'distance-string' with random distance string
function populateDistanceStrings() {
    const distanceStrings = document.getElementsByClassName('distance-string');
    for (let i = 0; i < distanceStrings.length; i++) {
        distanceStrings[i].innerHTML = getRandomDistanceString();
    }
}

populateDistanceStrings();