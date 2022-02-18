export function formatPrice(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getSelectOptions = (dataArr, keys) => {
  const options = {};
  for (let i = 0; i < keys.length; i++) {
    const set = new Set();
    dataArr.forEach((item) => {
      set.add(item[keys[i]]);
    });
    options[keys[i]] = [...set];
  }
  return options;
};
