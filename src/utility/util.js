const formatCurrency = (number) => {
  return number
    ? "$" + Number(number.toFixed(2).toLocaleString() + " ")
    : number;
};
const util = {
  formatCurrency,
};
export default util;
