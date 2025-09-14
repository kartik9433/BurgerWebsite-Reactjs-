import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Burger from "../../assests/hero/hero-2.png";
import { Link } from 'react-router-dom';

function Section1() {
  return (
    <section className='hero_section'>
         <Container>
               <Row>
                   <Col lg={7} className='mb-5 mb-lg-0'>
                   <div className="position-relative">
                     <img src={Burger} alt="Hero" className='img-fluid' />
                     <div className="price_badge">
                          <div className="badge_text">
                            <h4 className='h4_xs'>Only</h4>
                            <h1 className='h3_lg'>$6.90</h1>
                          </div>
                     </div>
                   </div>
                   </Col>
                   <Col lg={5}>
                       <div className="hero_text text-center">
                               <h1 className='text-white'>New Burger</h1>
                               <h2 className='text-white'>with Onion</h2>
                               <p className='text-white pt-2 pb-4'>
                                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam rerum distinctio quaerat quod neque eligendi porro ducimus ipsam animi recusandae a, qui dolore libero tempora harum fuga eaque ea in!
                               </p>
                               <Link to="/" className="btn order_now btn-warning">
                                     Order Now
                               </Link>
                       </div>
                   </Col>
               </Row>
         </Container>
    </section>
  )
}

export default Section1
