export const getFlag = (e: string) => {
  const lowerStr = e.toLowerCase();
  const flag = lowerStr.split(" ").join("-");

  return flag;
};

export const getRandomId = (length = 9) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    randomId += chars[Math.floor(Math.random() * chars.length)];
  }

  return randomId;
};

console.log(getRandomId());
