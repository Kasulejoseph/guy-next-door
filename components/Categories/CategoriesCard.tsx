import { useRouter } from 'next/router'
import Card from "react-bootstrap/Card";
import styles from "../../styles/BrowseCard.module.css";

interface browsecard {
  category: string;
}

export const  CategoryCard = ({ category }: browsecard) => {
  const router = useRouter();

  const handleClick = () => {
    console.log("yessss");
    router.push(`/${category.toLowerCase()}`)

  }
  return (
    <Card className={styles.card} onClick={handleClick}>
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
