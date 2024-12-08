// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)*264;
  }

function distanceTravelledInFeet(pickupLocation, destinationLocation) {
    let blocksTravelled = Math.abs(destinationLocation - pickupLocation);
    return blocksTravelled * 264;
}

function calculatesFarePrice(pickupLocation, destinationLocation) {
    const feetTravelled = distanceTravelledInFeet(pickupLocation, destinationLocation);

    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}