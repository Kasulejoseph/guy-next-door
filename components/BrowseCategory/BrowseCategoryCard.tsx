import Card from "react-bootstrap/Card";
import styles from "../../styles/BrowseCard.module.css";

interface browsecard {
  category: string;
}

export function BrowseCategoryCard({ category }: browsecard) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src="/jason-restuarant.jpg" />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
