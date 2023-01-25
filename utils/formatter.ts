export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCaseAll = (str: string) => {
  return str
    .trim()
    .split(" ")
    .map((w) => capitalizeFirstLetter(w))
    .join(" ");
};
