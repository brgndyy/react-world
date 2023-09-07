export const getArticles = async () => {
  const getArticlesEndPoint = `${process.env.NEXT_PUBLIC_GET_ARTICLES_END_POINT}?offset=0&limit=9`;

  const res = await fetch(getArticlesEndPoint, {
    method: "GET",
  });

  const data = await res.json();

  return data;
};
