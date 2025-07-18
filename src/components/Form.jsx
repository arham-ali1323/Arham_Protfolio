import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <h2 className="contact-title">
        Contact <span className="contact-title-glow">Me?</span>
      </h2>
      <Form className="custom-contact-form">
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Control placeholder="First Name" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Control placeholder="Last Name" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Control placeholder="Email" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Control placeholder="Subject" />
          </Col>
          <Col xs={12} className="mb-4">
            <Form.Control as="textarea" rows={5} placeholder="Message" />
          </Col>
        </Row>
        <div className="text-center">
          <button className="glow-btn" type="submit">
            Send
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;