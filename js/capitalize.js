const capitalize = (str) => {
  if (!str) return '';
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
};

export default capitalize;
