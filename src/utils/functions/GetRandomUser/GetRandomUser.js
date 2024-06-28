export const getRandomUser = (Users) => {
  const randomIndex = Math.floor(Math.random() * Users.length);
  return Users[randomIndex];
};
