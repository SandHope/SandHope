let currentValue = 0;
let direction = 1;
let bounds = getRandomBounds();

export function getRandomBounds() {
  const minBound = Math.random() * 5 - 10;
  const maxBound = Math.random() * 5 + 5;
  return [minBound, maxBound];
}

export function getRotateAngle() {
  if (
    (direction === 1 && currentValue >= bounds[1]) ||
    (direction === -1 && currentValue <= bounds[0])
  ) {
    direction *= -1;
    bounds = getRandomBounds();
  }

  currentValue += direction * 0.1;

  return currentValue;
}
