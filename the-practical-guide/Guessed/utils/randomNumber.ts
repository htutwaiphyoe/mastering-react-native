export const generateRandomNumber = ({
  min,
  max,
  exclude,
}: {
  min: number;
  max: number;
  exclude?: number;
}): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber === exclude
    ? generateRandomNumber({min, max, exclude})
    : randomNumber;
};
