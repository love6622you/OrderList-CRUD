export const generateRandomId = () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = length || 8;
  let randomId = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomId += charset.charAt(randomIndex);
  }
  return randomId;
};
