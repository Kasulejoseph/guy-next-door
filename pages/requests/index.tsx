import React from "react";
import { Requests } from "../../components/Requests";
import { requestsType } from "../../components/Requests/types";
import { BASE_URL } from "../../config";


export const index = ({requests}: requestsType) => {    
    
  return (
    <>
      <Requests requests={requests} />
    </>
  );
};

export const getStaticProps = async () => {
    const res = await fetch(`${BASE_URL}/requests`);
    const requests = await res.json()
    return {
        props: { requests }
    }
}

export default index;
