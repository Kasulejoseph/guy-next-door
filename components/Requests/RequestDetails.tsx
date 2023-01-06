import React from "react";
import { requestType } from "./types";
import style from "../../styles/Requests.module.css";
import { Badge, Button, ListGroup } from "react-bootstrap";

export const RequestDetails = ({ request }: requestType) => {
  return (
    <div className={style.detailsContainer}>
      <div className={style.detailsMain}>
        <div className={style.detailsWraper}>
          <h4 className="mb-3">Request details</h4>
          <ListGroup>
            <ListGroup.Item className={style.detailsTitle}>
              <h2>{request.title}</h2>
              <div className="mb-4">
                <span>Posted: {request.duration} hours ago</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className={style.detailsTitle}>
              <div style={{ wordSpacing: "7px" }}>{request.body}</div>
            </ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item className={style.detailsTitle}>
              <h6 className="mb-3">Categories</h6>
              {request.tags.map((tag) => (
                <Badge key={tag} className={style.cardBadge} bg="secondary">
                  {tag}
                </Badge>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
        <div className={style.detailsSidebar}>
          <ListGroup>
            <ListGroup.Item>
              <Button className={style.detailsApplyButton} variant="success">
                Apply Now
              </Button>
              <span className={style.detailsFlag}>
                <a href="#">Flag as inappropriate</a>
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5 style={{ marginBottom: "1rem" }}>About the client</h5>
              <ul className={style.detailsAboutClient}>
                <li>Rating: *****</li>
                <li>
                  {" "}
                  <strong>Kisasi</strong>
                </li>
                <li>1 request posted</li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className={style.detailsClientHistory}>
        <ListGroup>
          <ListGroup.Item className={style.detailsTitle}>
            <h2>Client's Recent History</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <ul>
              <li className="d-flex">
                <div className={style.recentHistoryRating}>
                  <h4>{request.title}</h4>* * * * * Wonderful client, with whom
                  I greatly enjoy working!
                </div>
                <div className={style.recentHistoryRatingDate}>
                  <span>Dec 2022</span>
                </div>
              </li>
              <li className="d-flex">
                <div className={style.recentHistoryRating}>
                  <h4>{request.title}</h4>* * * I always love working with
                  Heath. A very good Person to work with, wish to work again
                  with him.
                </div>
                <div className={style.recentHistoryRatingDate}>
                  <span>Nov 2022</span>
                </div>
              </li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};
