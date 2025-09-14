import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from "../../assests/menu/burger-11.jpg";
import Image2 from "../../assests/menu/burger-12.jpg";
import Image3 from "../../assests/menu/burger-13.jpg";
import Image4 from "../../assests/menu/burger-14.jpg";
import Image5 from "../../assests/menu/burger-15.jpg";
import Image6 from "../../assests/menu/burger-16.jpg";
import Image7 from "../../assests/menu/burger-17.jpg";
import Image8 from "../../assests/menu/burger-18.jpg";
import Cards from '../../components/Layouts/Cards';
import { Link } from 'react-router-dom';
import "../../styles/HomeStyle.css";

function Section3() {
  const mockData = [
    { id: "0001", image: Image1, title: "Crispy Chicken", paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw", rating: 5, price: 99.15 },
    { id: "0002", image: Image2, title: "Ultimate Bacon", paragraph: "House patty, cheddar cheese, bacon, onion, mustard", rating: 4.5, price: 99.32 },
    { id: "0003", image: Image3, title: "Black Sheep", paragraph: "American cheese, tomato relish, avocado, lettuce, red onion", rating: 4, price: 69.15 },
    { id: "0004", image: Image4, title: "Vegan Burger", paragraph: "House patty, cheddar cheese, bacon, onion, mustard", rating: 3.5, price: 99.25 },
    { id: "0005", image: Image5, title: "Double Burger", paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes", rating: 3.0, price: 59.25 },
    { id: "0006", image: Image6, title: "Turkey Burger", paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 3, price: 79.18 },
    { id: "0007", image: Image7, title: "Smokey House", paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles", rating: 2.5, price: 99.19 },
    { id: "0008", image: Image8, title: "Classic Burger", paragraph: "cheddar cheese, ketchup, mustard, pickles, onion", rating: 2.0, price: 89.12 },
  ];
 
   
  return (
    <section className='menu_section'>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem dolorem quam voluptatum ea architecto veniam sint et ut molestiae!</p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData) => (
            <Cards 
              key={cardData.id}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
            />
          ))}
        </Row>
        <Row className='pt-5 ads'>
          <Col sm={6} lg={6}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn-primary btn_red px-4 round-0 ">Learn More</Link>
            </div>
          </Col>
          <Col sm={6} lg={6}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE Burger</h5>
              <Link to="/" className="btn btn-primary btn_red px-4 round-0 ">Learn More</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
