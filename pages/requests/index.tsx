import React from "react";
import { Requests } from "../../components/Requests";
import { BASE_URL } from "../../config";

interface requestObjType {
    id: string;
    title: string;
    tags: Array<string>
    duration: string;
    body: string;
}
interface requestsType {
    requests: Array<requestObjType>;
}

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
