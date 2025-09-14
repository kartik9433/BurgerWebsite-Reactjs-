import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assests/about/pizza.png"
import Salad from "../../assests/about/salad.png"
import Delivery from "../../assests/about/delivery-bike.png";
import "../../styles/HomeStyle.css"

function Section2() {
      const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
];

  return (
    <>
       <section className='about_section'>
       <Container>
        <Row>
            <Col lg={{span:8, offset:2}} className='text-center'>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam earum harum consequuntur neque, suscipit ducimus. Eaque, suscipit. Sit facilis nihil dolor libero tota</p>
            <Link to="/" className="btn bg-primary order_now">
            Explore Full Menu
            </Link>
            </Col>
        </Row>
       </Container>
       </section>
       <section className='about_wrapper bg-warning'>
          <Container>
            <Row className='justify-content-md-center'>
                {mockData.map((cardData,index)=>(
                   <Col md={6} lg={4} className='mb-4 mb-md-0 'key={index}>
                       <div className='about_box text-center'>
                            <div className="about_icon">
                                <img src={cardData.image} alt="icon" className='img-fluid' />
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                       </div>
                   </Col>
                ))}
            </Row>
          </Container>
       </section>
       </>
  )
}

export default Section2
