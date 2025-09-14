import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import applestore from "../../assests/shop/appstore.png"
import googlestore from "../../assests/shop/googleplay.png"
import downloadImage from "../../assests/shop/e-shop.png"
import "../../styles/HomeStyle.css"

function Section5() {
  return (
    <section>
      <Container className="shope_section">
        <Row className="align-item-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Download mobile App and</h4>
            <h2>save up to 20%</h2>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
              primis libero tempus, blandit varius
            </p>
            <Link to="/" >
              <img src={applestore} alt="applestore" className='img-fluid me-3' />
            </Link>
            <Link to="/" >
            <img src={googlestore} alt="gogglestore" className='img-fluid me-3' />
            </Link>
          </Col>
          <Col lg={6}>
               <img src={downloadImage} alt="downloadImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );    
}

export default Section5
