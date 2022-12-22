import Card from 'react-bootstrap/Card';
import styles from '../styles/BrowseCard.module.css'

interface featuredcard {
    type: string;
}

export function FeaturedCard({type}: featuredcard) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src="/atikah-salon.jpg" />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{type} | <span className='small'>Ntinda</span></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
