import styles from "../styles/Home.module.css";

import ArticlesList from "../components/ArticlesList";
import { BASE_URL } from "../config";
import { ServiceBanner } from "../components/Banner";
import { BrowseCard } from "../components/BrowseCard";
import { FeaturedCard } from "../components/FeaturedCard";

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
      <ul className="row" style={{ listStyle: "None" }}>
        <li className="col">
          <ServiceBanner type="Products Type" />
        </li>
        <li className="col">
          <ServiceBanner type="Services Type" />
        </li>
      </ul>
      <ul className="row" style={{ listStyle: "None", padding: '0px' }}>
        <h3 className="mt-3">Browse By Category</h3>
        <li className="col">
          <BrowseCard category="Resturants" />
        </li>
        <li className="col">
          <BrowseCard category="Laundry" />
        </li>
        <li className="col">
          <BrowseCard category="Travel" />
        </li>
      </ul>
      <ul className="row" style={{ listStyle: "None", padding: '0px' }}>
        <h3 className="mt-3">Featured Services</h3>
        <li className="col">
          <FeaturedCard type="Mama Naki Kafunda" />
        </li>
        <li className="col">
        <FeaturedCard type="Shopwise Supermarket" />
        </li>
        <li className="col">
        <FeaturedCard type="JB Unisex Salon" />
        </li>
      </ul>
      <ul className="">
        <ul className=""> <h3>Requests</h3></ul>
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
