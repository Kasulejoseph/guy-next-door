import { Card, Badge } from "react-bootstrap";
import style from "../../styles/Card.module.css";
import { requestObjType } from "./types";

interface requestType {
  request: requestObjType;
}

export const RequestCard = ({ request }: requestType) => {
  return (
    <>
      <Card key={request.id} className={style.detailsCard}>
        <Card.Body>
          <Card.Title className={style.cardTitle}>{request.title}</Card.Title>
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
    </>
  );
};
