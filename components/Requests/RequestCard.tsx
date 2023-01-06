import { useRouter } from "next/router";
import { Card, Badge } from "react-bootstrap";
import style from "../../styles/Card.module.css";
import { requestType } from "./types";

export const RequestCard = ({ request }: requestType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/requests/${request.id}`)
  }
  return (
    <>
      <Card onClick={handleClick} key={request.id} className={style.detailsCard}>
        <Card.Body>
          <Card.Title className={style.cardTitle}>{request.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Posted: {request.duration} hours ago
          </Card.Subtitle>
          <Card.Text>{request.body}</Card.Text>
          {request.tags.map((tag) => (
            <Badge key={tag} className={style.cardBadge} bg="secondary">
              {tag}
            </Badge>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};
