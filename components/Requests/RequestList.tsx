import { RequestCard } from "./RequestCard";
import { requestsType } from "./types";

export const RequestList = ({ requests }: requestsType) => {
  return (
    <>
      {requests.map((request) => (
        <RequestCard request={request} />
      ))}
    </>
  );
};
