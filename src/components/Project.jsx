import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsMouseFill } from "react-icons/bs";
import project1 from "../img/Project-1.png";
import project2 from "../img/Project-2.png";
import project3 from "../img/Project-3.png";
import project4 from "../img/Project-4.png";

function Project() {
  return (
    <div
      style={{
        backgroundColor: "#212529",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2
        className="text-center text-white mb-5"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Our <span style={{ color: "#007bff" }}>Project</span>
      </h2>
      <Container>
        <Row className="g-4">
          <Col xs={12} md={6}>
            <div className="project-card position-relative">
              <Card className="bg-dark text-white rounded shadow-lg overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project1}
                  alt="Project 1"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/2d3748/ffffff?text=Image+Load+Error";
                  }}
                />
                <div className="project-overlay">
                  <BsMouseFill size={30} className="mb-3" />
                  <h3>Web Design</h3>
                  <p>
                    I’m a passionate Frontend Developer with a strong background
                    in building modern, responsive websites using HTML, CSS,
                    JavaScript, Bootstrap, Tailwind CSS, and React.js. I enjoy
                    creating clean, user-friendly interfaces and solving
                    real-world problems through code. My goal is to build
                    websites that not only look great but also deliver smooth
                    and efficient user experiences across all devices.
                  </p>
                  <p>
                    I specialize in building responsive, fast, and visually
                    engaging websites. With a passion for frontend development
                    and a strong eye for detail, I transform ideas into fully
                    functional web applications.
                  </p>{" "}
                  <p>
                    Et blanditiis sit neque provident soluta quibusdam. Ut optio
                    nobis. Eligendi voluptas qui maxime id quo culpa qui. Nihil
                    error necessitatibus distinctio explicabo et.
                  </p>
                  <p>
                    Voluptas quas placeat. Quia aut aut vel harum ullam eum.
                    Nihil minima fugit fuga{" "}
                  </p>
                  <BsMouseFill size={30} className="mb-3" />
                </div>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="project-card position-relative">
              <Card className="bg-dark text-white rounded shadow-lg overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project2}
                  alt="Project 2"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/2d3748/ffffff?text=Image+Load+Error";
                  }}
                />
                <div className="project-overlay">
                  <h3>Web Design</h3>
                  <p>
                    I’m a passionate Frontend Developer with a strong background
                    in building modern, responsive websites using HTML, CSS,
                    JavaScript, Bootstrap, Tailwind CSS, and React.js. I enjoy
                    creating clean, user-friendly interfaces and solving
                    real-world problems through code. My goal is to build
                    websites that not only look great but also deliver smooth
                    and efficient user experiences across all devices.
                  </p>

                  <p>
                    I specialize in building responsive, fast, and visually
                    engaging websites. With a passion for frontend development
                    and a strong eye for detail, I transform ideas into fully
                    functional web applications.
                  </p>
                  <BsMouseFill size={30} className="mb-3" />
                </div>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="project-card position-relative">
              <Card className="bg-dark text-white rounded shadow-lg overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project3}
                  alt="Project 3"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/2d3748/ffffff?text=Image+Load+Error";
                  }}
                />
                <div className="project-overlay">
                  <h3>Web Design</h3>
                  <p>
                    I’m a passionate Frontend Developer with a strong background
                    in building modern, responsive websites using HTML, CSS,
                    JavaScript, Bootstrap, Tailwind CSS, and React.js. I enjoy
                    creating clean, user-friendly interfaces and solving
                    real-world problems through code. My goal is to build
                    websites that not only look great but also deliver smooth
                    and efficient user experiences across all devices.
                  </p>
                  <p>
                    I specialize in building responsive, fast, and visually
                    engaging websites. With a passion for frontend development
                    and a strong eye for detail, I transform ideas into fully
                    functional web applications.
                  </p>{" "}
                  <BsMouseFill size={30} className="mb-3" />
                </div>
              </Card>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="project-card position-relative">
              <Card className="bg-dark text-white rounded shadow-lg overflow-hidden">
                <Card.Img
                  variant="top"
                  src={project4}
                  alt="Project 4"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/2d3748/ffffff?text=Image+Load+Error";
                  }}
                />
                <div className="project-overlay">
                  <h3>Web Design</h3>
                  <p>
                    I’m a passionate Frontend Developer with a strong background
                    in building modern, responsive websites using HTML, CSS,
                    JavaScript, Bootstrap, Tailwind CSS, and React.js. I enjoy
                    creating clean, user-friendly interfaces and solving
                    real-world problems through code. My goal is to build
                    websites that not only look great but also deliver smooth
                    and efficient user experiences across all devices.
                  </p>
                  <p>
                    I specialize in building responsive, fast, and visually
                    engaging websites. With a passion for frontend development
                    and a strong eye for detail, I transform ideas into fully
                    functional web applications.
                  </p>{" "}
                  <BsMouseFill size={30} className="mb-3" />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
