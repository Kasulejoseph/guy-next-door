import { Col, Row, Card } from "react-bootstrap";
import style from "../../styles/Restuarants.module.css";

export const Restuarants = () => {
  return (
    <Row>
      <Col sm={4}>1</Col>
      <Col sm={8}>
        <Card className={style.detailsCard}>
          <Card.Img
            className={style.detailsCardImage}
            variant="top"
            src="/jason-restuarant.jpg"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.detailsCard}>
          <Card.Img
            className={style.detailsCardImage}
            variant="top"
            src="/jason-restuarant.jpg"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
