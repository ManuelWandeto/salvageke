export const paginate = (dataArr, pageSize) => {
  let startNumber = 0;
  let endNumber = pageSize;
  let pages = [];
  let totalPages = Math.ceil(dataArr.length / pageSize);
  for (let i = 0; i < totalPages; i++) {
    pages.push({
      pageNumber: i + 1,
      items: dataArr.slice(startNumber, endNumber),
    });
    startNumber = endNumber;
    endNumber += pageSize;
  }
  return {
    totalPages,
    pages,
  };
};

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
