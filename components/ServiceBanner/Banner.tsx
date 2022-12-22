import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface servicebanner {
  type: string;
}

export function ServiceBanner({ type }: servicebanner) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="/amadej-tauses.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{type}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        <Button variant="primary">Explore</Button>
      </Card.ImgOverlay>
    </Card>
  );
}
