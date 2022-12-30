import { ListGroup, Form } from "react-bootstrap";
import style from "../../styles/Card.module.css";

export const RequestSideFilter = () => {
  return (
    <>
      <ListGroup className={style.sideListGroup}>
        <ListGroup.Item>
          <h6>Category Type</h6>
          {[
            "Restuarants",
            "Arts",
            "Laundry",
            "Shopping",
            "Real Estates",
            "Groceries",
            "Healthy and Insuarance",
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
      </ListGroup>
    </>
  );
};
