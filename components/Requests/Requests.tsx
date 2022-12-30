import { Col, Row, Card, Badge } from "react-bootstrap";
import style from "../../styles/Card.module.css";
import { RequestSideFilter } from "./RequestSideFilter";

interface requestObjType {
  id: string;
  title: string;
  tags: Array<string>;
  duration: string;
  body: string;
}
interface requestsType {
  requests: Array<requestObjType>;
}

export const Requests = ({ requests }: requestsType) => {
  return (
    <>
      <Row>
        <Col sm={3}>
          <RequestSideFilter />
        </Col>
        <Col sm={9}>
          {requests.map((request) => (
            <Card key={request.id} className={style.detailsCard}>
              <Card.Body>
                <Card.Title className={style.cardTitle}>
                  {request.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Posted: {request.duration} hours ago
                </Card.Subtitle>
                <Card.Text>{request.body}</Card.Text>
                {request.tags.map((tag) => (
                  <Badge className={style.cardBadge} bg="secondary">
                    {tag}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};
