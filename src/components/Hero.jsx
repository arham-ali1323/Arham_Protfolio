import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";
import Navbar from "../components/Navbar";
import HeroImg from "../img/HeroImg.png";


function Hero() {
  return (
    <> 
    <section className="hero">
    <Container className="hero-container ">
        <Navbar />
        <Row className="py-5 d-flex">
   <Col xs={12} md={8}>
            <h3>Hello it's Me </h3>
            <h1>Muhammad Arham Ali</h1>
            <h3>
              And I'm a <span className="web-developer">A Web Developer</span>
            </h3>
            <p>
              I am a web developer with a passion for creating beautiful and
              functional websites.
            </p>
            <ul className="social-icons">
              <li>
                <NavLink href="https://www.facebook.com/mohammad.arham.ali.9404">
                  <i className="bi bi-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink href="https://www.instagram.com/mohammad.arham.ali.9404">
                  <i className="bi bi-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink href="https://www.linkedin.com/in/mohammad-arham-ali-9404">
                  <i className="bi bi-linkedin"></i>
                </NavLink>
              </li>
              <li>
                <NavLink href="https://www.twitter.com/mohammad.arham.ali.9404">
                <i class="bi bi-twitter-x"></i>
                </NavLink>
              </li>
            </ul>
            <button className="btn btn-primary">Download CV</button>
          </Col>
          <Col xs={12} md={4} className="hero-img">
            <img src={HeroImg} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>

    </>
  );
}

export default Hero;
