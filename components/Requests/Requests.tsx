import { Col, Row, Card, ListGroup, Form, Badge } from "react-bootstrap";
import style from "../../styles/Card.module.css";
import { RequestSideFilter } from "./RequestSideFilter";

export const Requests = () => {
  return (
    <>
      <Row>
        <Col sm={3}>
          <RequestSideFilter />
        </Col>
        <Col sm={9}>
          {[
            "Maama Naki Restuarant",
            "Fraine Restuarants",
            "Grill & TakeAway",
            "Spoons & Forks",
            "Ceilo Bar And Restuarant",
          ].map((res) => (
            <Card className={style.detailsCard}>
              <Card.Body>
                <Card.Title className={style.cardTitle}>
                  ChatGPT tool that allows to prompt large texts
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Posted: 2 hours ago
                </Card.Subtitle>
                {/* <Link className={style.cardBodyLink} href="#">
                <h3>{res}</h3>
              </Link> */}
                <Card.Text>
                  We are a startup software Company and we are looking for a
                  specialist web developer who can help us Create, Develope,
                  Setup and train us on long term adjustment for our online
                  presence which is yet to be built from scratch.
                </Card.Text>
                <Badge className={style.cardBadge} bg="secondary">
                  Arts
                </Badge>
                <Badge className={style.cardBadge} bg="secondary">
                  Groceries
                </Badge>
                <Badge className={style.cardBadge} bg="secondary">
                  Education
                </Badge>
                <Badge className={style.cardBadge} bg="secondary">
                  Banking
                </Badge>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};
