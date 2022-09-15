import { React, useEffect } from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Landing from '../../Components/Landing/Landing';
import Content from '../../Components/Content/Content';

export default function NavBar() {

  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        console.log("inside");
        $('#heading').addClass('invertedcolor');
      } else {
        $('#heading').removeClass('invertedcolor');
      }
    });
  }, [])


  return (
    <>
      <Navbar bg="transparent" variant="dark" fixed="top"   >
        <Container>
          <div className='heading' >Travel Nation</div>
          <div className="me-auto ms-5">
            <i className="fa-solid fa-magnifying-glass me-2 mt-1"></i>
            <input className='content-search' type={'text'} placeholder="Search Destinations, Tours, Activities " />
          </div>
          <Nav className='ms-auto'>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

    </>
  )
}
