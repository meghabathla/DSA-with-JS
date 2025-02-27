var largestAltitude = function (gain) {
  let currentAltitude = 0;
  let maxAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    maxAltitude = Math.max(maxAltitude, currentAltitude);
  }
  return maxAltitude;
};

const result = largestAltitude([-5, 1, 5, 0, -7]);
console.log(result);
