
export type requestObjType = {
    id: string;
    title: string;
    tags: Array<string>;
    duration: string;
    body: string;
  };
  
  export type requestsType =  {
    requests: Array<requestObjType>;
  }