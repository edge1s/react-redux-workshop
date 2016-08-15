export const arrayToMap = arr => {
  const map = new Map();
  arr.forEach(el => {
    map.set(el.id, el);
  });

  return map;
};
