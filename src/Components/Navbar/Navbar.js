import { React, useEffect } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

export default function NavBar() {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#logo ").addClass("invertedNav");
        $("#nav-bar").addClass("nav-bar");
      } else {
        $("#logo").removeClass("invertedNav");
        $("#nav-bar").removeClass("nav-bar");
      }
    });
  }, []);

  return (
    <>
      <div>
        <Navbar id="nav-bar" fixed="top">
          <Container>
            <div id="logo">Vishal Cycle Store</div>
            <div className="me-auto ms-5">
              <i className="fa-solid fa-magnifying-glass me-2 mt-1"></i>
              <input
                className="content-search fs-6"
                id="logo"
                type={"text"}
                placeholder="Search your bycycle... "
              />
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
