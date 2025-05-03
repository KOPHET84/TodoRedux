export const loadFromLocalStorage = () => {
  const data = localStorage.getItem("todoState");
  return data ? JSON.parse(data) : undefined;
};
