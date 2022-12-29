import { Col, Row, Card } from "react-bootstrap";
import style from "../../styles/Restuarants.module.css";
import Link from "next/link";
import { FilterSideBar } from "../Layouts/FilterSideBar";

export const Restuarants = () => {
  return (
    <Row>
      <Col sm={4}>
        <FilterSideBar />
      </Col>
      <Col sm={8}>
        {[
          "Maama Naki Restuarant",
          "Fraine Restuarants",
          "Grill & TakeAway",
          "Spoons & Forks",
          "Ceilo Bar And Restuarant",
        ].map((res) => (
          <Card className={style.detailsCard}>
            <Card.Img
              className={style.detailsCardImage}
              variant="top"
              src="/jason-restuarant.jpg"
            />
            <Card.Body>
              <Link className={style.cardBodyLink} href="#">
                <h3>{res}</h3>
              </Link>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
};
