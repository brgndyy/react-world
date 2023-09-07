export const removeAt = (name: string) => {
  const realName = name.replace("%40", "");

  return realName;
};
