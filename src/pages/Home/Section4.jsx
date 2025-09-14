import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import PromotionImage from "../../assests/promotion/pro.png"
import "../../styles/HomeStyle.css"

function Section() {
  return (
    <section  className='promotion_section'>
         <Container>
            <Row>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                <img src={PromotionImage} alt="promotion" className='img-fluid'/>
                </Col>
                  <Col lg={6} className='px-5 mt-9'>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam sunt obcaecati at reiciendis, voluptatem quae impedit eaque</p>
                  <ul>
                    <li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam sunt obcaecati </p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam sunt obcaecati at </p>
                    </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam sunt obcaecati at </li>
                  </ul>
                </Col>
            </Row>
         </Container>
    </section>
  )
}

export default Section
