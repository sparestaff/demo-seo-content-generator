export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCaseAll = (string: string) => {
  return string
    .trim()
    .split(" ")
    .map((w) => capitalizeFirstLetter(w))
    .join(" ");
};
