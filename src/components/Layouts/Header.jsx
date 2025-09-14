import React,{useState,useEffect} from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import "../../styles/HeaderStyle.css"
import { Link } from 'react-router-dom';
import Logo from "../../assests/logo/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faL } from '@fortawesome/free-solid-svg-icons';

function Header() {
     const[nav,setNav]=useState(false);
     const changeValueonScroll=()=>{
      const scrollValue = document.documentElement.scrollTop;
      scrollValue>100 ?setNav(true):setNav(false);
     };
    
    useEffect(() => {
        window.addEventListener("scroll",changeValueonScroll);
        return () => {
            window.removeEventListener("scroll",changeValueonScroll);
        };
    }, []);

  return (  
     <header>
      <Navbar className={`${nav == true ? "sticky":""}`} >
        <Container>
          <Navbar.Brand href="#home" >
            <Link to="/" className='logo'> 
            <img src={Logo} alt="logo" className='img_fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link}to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shope">Shope</Nav.Link>
            <Nav.Link as={Link}to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link}to="/">
               <div className="cart">
                <FontAwesomeIcon icon={faBagShopping} />
                  <em className='roundpoint'>2</em>
               </div> 
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
