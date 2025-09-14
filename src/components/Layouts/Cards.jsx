import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Cards({ image, rating, title, paragraph, price }) {
  return (
    <>
      <Col sm={6} lg={4} xl={3} className="mb-4">
        <Card className="overflow-hidden">
          <div className="overflow-hidden">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="item_rating">{rating}</div>
              <div className="wishlist ms-3">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>

            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>

            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="menu-price">
                <h5 className="mb-0">${price}</h5>
              </div>
              <div className="add_to_cart">
                <Link to="/" className="btn btn-primary d-flex align-items-center">
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                  Add to Cart
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
       
      </>
  );
}

export default Cards;
