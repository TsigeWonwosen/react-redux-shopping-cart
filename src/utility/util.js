export default {
  formatCurrency: function (number) {
    return number
      ? "$" + Number(number.toFixed(2).toLocaleString() + " ")
      : number;
  },
};
