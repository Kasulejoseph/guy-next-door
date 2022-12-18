import styles from "../styles/Home.module.css";

import ArticlesList from "../components/ArticlesList";
import { BASE_URL } from "../config";

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

export default function Home({ articles }: articlesListType) {
  return (
    <>
      <ArticlesList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
