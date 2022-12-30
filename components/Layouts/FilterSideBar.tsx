import { ListGroup, Form } from "react-bootstrap";
import style from "../../styles/Card.module.css";

export const FilterSideBar = () => {
  return (
    <>
      <ListGroup className={style.sideListGroup}>
        <ListGroup.Item>
          <h6>Establishment Type</h6>
          {[
            "Restuarants",
            "Quick Bites",
            "Dessert",
            "Coffee & Tea",
            "Bakeries",
            "Bars & Pubs",
            "Delivery Only",
          ].map((type) => (
            <Form.Check key={type}>
              <Form.Check.Input
                type="checkbox"
                id={type}
                className={style.sideListCheckbox}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Meals</h6>
          {["Breakfast", "Brunch", "Lunch", "Dinner"].map((type) => (
            <Form.Check key={type}>
              <Form.Check.Input
                type="checkbox"
                id={type}
                className={style.sideListCheckbox}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Price</h6>
          {["Cheap Eats", "Mid-range", "Fine Dining"].map((type) => (
            <Form.Check key={type}>
              <Form.Check.Input
                type="checkbox"
                id={type}
                className={style.sideListCheckbox}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Cuisine</h6>
          {[
            "Local",
            "African",
            "Asian",
            "European",
            "Indian",
            "Cafe",
            "Pizza",
            "Fast Food",
          ].map((type) => (
            <Form.Check key={type}>
              <Form.Check.Input
                type="checkbox"
                id={type}
                className={style.sideListCheckbox}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          ))}
        </ListGroup.Item>
        <ListGroup.Item>
          <h6>Good for</h6>
          {[
            "Families with children",
            "Large groups",
            "Business meetings",
            "Kids",
            "Bar scene",
            "Romantic",
            "Special occasions",
          ].map((type) => (
            <Form.Check key={type}>
              <Form.Check.Input
                type="checkbox"
                id={type}
                className={style.sideListCheckbox}
              />
              <Form.Check.Label>{type}</Form.Check.Label>
            </Form.Check>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
