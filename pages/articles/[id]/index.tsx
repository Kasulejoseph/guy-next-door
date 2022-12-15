import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { GetStaticPaths } from "next";

const BASEURL = "https://jsonplaceholder.typicode.com/posts";

type articleType = {
  userId: Number;
  id: Number;
  title: String;
  body: String;
};
type articleObjType = {
  article: {
    userId: Number;
    id: Number;
    title: String;
    body: String;
  };
};

const index = ({ article }: articleObjType) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${BASEURL}/${context?.params?.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(BASEURL);
  const articles = await res.json();

  const paths = articles.map((article: articleType) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
};

export default index;
