import ArticlesStyle from "../styles/Articles.module.css";
import Link from "next/link";

export type articleType = {
  article: {
    userId: Number;
    id: Number;
    title: String;
    body: String;
  };
};

export const Article = ({ article }: articleType) => {
  return (
    <Link
      className={ArticlesStyle.card}
      href={`articles/[id]`}
      as={`articles/${article.id}`}
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};
