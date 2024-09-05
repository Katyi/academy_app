export const formatPrice = (price: number) => {
  // return new Intl.NumberFormat('en-US', {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    // currency: 'USD',
    currency: 'RUB',
  }).format(price);
};
