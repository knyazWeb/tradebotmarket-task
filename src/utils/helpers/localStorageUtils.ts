export const getFromLocalStorage = <TValue>(
  key: string,
  defaultValue: TValue,
): TValue => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log('Ошибка при получении:', error);
    return defaultValue;
  }
};

export const setToLocalStorage = <TValue>(key: string, value: TValue): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Ошибка при записи', error);
  }
};
