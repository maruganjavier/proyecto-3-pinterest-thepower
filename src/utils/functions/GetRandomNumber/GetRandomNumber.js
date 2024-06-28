export const getRandomNumber = ({ maxNumber = "99" }) => {
  const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  return randomNumber;
};
