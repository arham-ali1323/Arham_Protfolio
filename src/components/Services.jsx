import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { BsBrush } from "react-icons/bs";

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">
          Our <span className="text-primary">Services</span>
        </h2>
        <Carousel className="services-carousel" indicators={false}>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="service-card">
                <Card.Body>
                  <div className="service-icon">
                    <BsBrush size={30} />
                  </div>
                  <Card.Title className="service-title">UX/UI Designer</Card.Title>
                  <Card.Text>
                    And flattery is not provided for by some. As an option for us.
                    Choosing pleasure who is the most important thing that is the
                    fault of who. Nothing is wrong with the necessities of
                    distinction, I will explain and.
                  </Card.Text>
                  <Card.Text>
                    Pleasures which please. Because either or or any of these him.
                    Nothing escapes the slightest flight
                  </Card.Text>
                  <div className="text-center">
                    <Card.Link className="btn btn-primary" href="/">
                      Read More
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="service-card">
                <Card.Body>
                  <div className="service-icon">
                    <BsBrush size={30} />
                  </div>
                  <Card.Title className="service-title">UX/UI Designer</Card.Title>
                  <Card.Text>
                    And flattery is not provided for by some. As an option for us.
                    Choosing pleasure who is the most important thing that is the
                    fault of who. Nothing is wrong with the necessities of
                    distinction, I will explain and.
                  </Card.Text>
                  <Card.Text>
                    Pleasures which please. Because either or or any of these him.
                    Nothing escapes the slightest flight
                  </Card.Text>
                  <div className="text-center">
                    <Card.Link className="btn btn-primary" href="/">
                      Read More
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="service-card">
                <Card.Body>
                  <div className="service-icon">
                    <BsBrush size={30} />
                  </div>
                  <Card.Title className="service-title">UX/UI Designer</Card.Title>
                  <Card.Text>
                    And flattery is not provided for by some. As an option for us.
                    Choosing pleasure who is the most important thing that is the
                    fault of who. Nothing is wrong with the necessities of
                    distinction, I will explain and.
                  </Card.Text>
                  <Card.Text>
                    Pleasures which please. Because either or or any of these him.
                    Nothing escapes the slightest flight
                  </Card.Text>
                  <div className="text-center">
                    <Card.Link className="btn btn-primary" href="/">
                      Read More
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Services;
