import styles from "../styles/Home.module.css";

import ArticlesList from "../components/Articles/ArticlesList";
import { BASE_URL } from "../config";
import { BrowseCategoryList } from "../components/BrowseCategory";
import { FeaturedList } from "../components/FeaturedProducts";
import { ServiceBannerList } from "../components/ServiceBanner";

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
      <ServiceBannerList />
      <BrowseCategoryList />
      <FeaturedList />
      <ul className="">
        <ul className="">
          {" "}
          <h3>Requests</h3>
        </ul>
        <ArticlesList articles={articles} />
      </ul>
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
