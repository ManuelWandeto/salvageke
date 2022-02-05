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
    totalItems: dataArr.length,
  };
};

export function formatPrice(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
