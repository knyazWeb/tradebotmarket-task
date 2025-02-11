const priceFormatter = (price: string | number | undefined): string =>
  Math.round(Number(price))
    .toString()
    .split('')
    .reverse()
    .map((item: string, i: number) => (i % 3 === 0 ? `${item} ` : item))
    .reverse()
    .join('');

export { priceFormatter };
