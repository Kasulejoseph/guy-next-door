import React, { useEffect } from "react";
import { Requests } from "../../components/Requests";
import { requestsType } from "../../components/Requests/types";
import { BASE_URL } from "../../config";
import { wrapper } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestState, setRequestState } from "../../store/requestSlice";

export const index = ({ requests }: requestsType) => {
  const dispatch = useDispatch();
  const requestState = useSelector(selectRequestState);

  useEffect(() => {
    dispatch(setRequestState(requests));
  }, [requestState, dispatch]);

  return (
    <>
      <Requests requests={requests} />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const res = await fetch(`${BASE_URL}/requests`);
    const requests = await res.json();
    await store.dispatch(setRequestState(requests));
    return {
      props: { requests },
    };
  }
);

export default index;
