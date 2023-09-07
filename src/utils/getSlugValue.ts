export const getSlugValue = (pathname: string) => {
  const slugMatch = pathname.match(/^\/@(.+)$/);
  if (slugMatch) {
    const slugValue = slugMatch[1];
    return slugValue;
  }

  return;
};
