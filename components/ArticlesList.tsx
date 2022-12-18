import ArticlesStyle from "../styles/Articles.module.css";
import { Article } from "./Article";

export type articleObjType = {
  userId: Number;
  id: Number;
  title: String;
  body: String;
};

export type articlesListType = {
  articles: [
    {
      userId: Number;
      id: Number;
      title: String;
      body: String;
    }
  ];
};

export default function Articles({ articles }: articlesListType) {
  return (
    <div className={ArticlesStyle.grid}>
      {articles.map((article: articleObjType) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
