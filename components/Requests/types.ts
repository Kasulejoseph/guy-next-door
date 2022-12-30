
export type requestObjType = {
    id: string;
    title: string;
    tags: Array<string>;
    duration: string;
    body: string;
  };
  
  export interface requestsType {
    requests: Array<requestObjType>;
  }