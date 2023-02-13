export const formatCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  });

  return formatter.format(amount);
};
