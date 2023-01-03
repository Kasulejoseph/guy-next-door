import { GetServerSideProps } from "next";
import React from "react";
import { requestObjType } from "../../components/Requests/types";
import { BASE_URL } from "../../config";

interface requestType {
  request: requestObjType;
}

const page = ({ request }: requestType) => {
  
  return <div>page {request.id}</div>;
};

export const getStaticProps: GetServerSideProps = async (context) => {
  console.log(context.params);

  const response = await fetch(`${BASE_URL}/requests/${context?.params?.id}`);
  const request = await response.json();
  return {
    props: {
      request,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${BASE_URL}/requests/`);
  const requests = await response.json();
  const paths = requests.map((request: requestObjType) => ({
    params: { id: request.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default page;
