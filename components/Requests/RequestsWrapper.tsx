import { Col, Row } from "react-bootstrap";
import { RequestList } from "./RequestList";
import { RequestSideFilter } from "./RequestSideFilter";
import { requestsType } from "./types";

export const Requests = ({ requests }: requestsType) => {
  return (
    <>
      <Row>
        <Col sm={3}>
          <RequestSideFilter />
        </Col>
        <Col sm={9}>
          <RequestList requests={requests} />
        </Col>
      </Row>
    </>
  );
};
