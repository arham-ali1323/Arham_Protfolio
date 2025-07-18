import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "../img/Group 3.png";

function Aboutme() {
  return (
<section className="aboutme"> 
     <Container className=" p-4" >
      <Row>
      <Col md={6}>
          <img src={About} className="img-fluid w-100" alt="" />
        </Col>
        <Col className="py-5">
          <h2>
            About <span className="text-primary">Me</span>
          </h2>
          <h2>Front-End Web Developer</h2>
          <p>
         Hi, I'm Arham Ali, a passionate Frontend Developer with a strong focus on building responsive, user-friendly, and visually appealing web interfaces. I specialize in technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js.
          </p>
          <p>
      I enjoy turning complex problems into simple, elegant solutions through clean and modular code. Whether it's an e-commerce platform, a real estate UI, or an AI-powered web tool, I love working on projects that blend design with functionality.
          </p>
          <h3>🔧 What I Do:</h3>
          <p>
  <ul>
    <li>Build dynamic, reusable React components</li>
    <li>Optimize web performance and accessibility</li>
    <li>Implement responsive layouts for all devices</li>
    <li>Collaborate with teams to deliver seamless user experiences</li>
    </ul>I’m always open to learning new tools and improving my craft. If you’re looking for someone who codes with care and designs with purpose — let’s connect!
          </p>
          <button className="btn btn-primary">See More</button>{" "}
        </Col>
      </Row>
    </Container>

</section>

  );
}

export default Aboutme;
