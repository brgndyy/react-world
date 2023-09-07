// 각 게시글들의 태그 갯수 세주는 함수

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string | null;
    image: string;
    following: boolean;
  };
};

type ArticleListProps = {
  articles: Article[];
};

export const countArticleTags = ({ articles }: ArticleListProps) => {
  const tagsMap = new Map();

  for (const article of articles) {
    for (const tag of article.tagList) {
      const count = tagsMap.get(tag) || 0;
      tagsMap.set(tag, count + 1);
    }
  }

  const sortedTags = [...tagsMap.entries()].sort((a, b) => b[1] - a[1]);

  return sortedTags.slice(0, 10).map((tagEntry) => tagEntry[0]);
};
