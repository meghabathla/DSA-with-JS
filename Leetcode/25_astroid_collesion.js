var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let asteroid of asteroids) {
    let explode = false;
    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const rightAsteriod = stack.pop();
      if (rightAsteriod === Math.abs(asteroid)) {
        explode = true;
        break;
      } else if (rightAsteriod > Math.abs(asteroid)) {
        asteroid = 0;
        stack.push(rightAsteriod);
        break;
      }
    }
    if (!explode && asteroid !== 0) {
      stack.push(asteroid);
    }
  }
  return stack;
};

const result = asteroidCollision([10, 2, -5]);
console.log(result);
