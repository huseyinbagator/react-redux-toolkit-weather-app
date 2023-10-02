import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomePage = () => {
  return (
    <div className="App d-flex align-items-center">
      <Container className="homepage">
        <Col className="text-center mt-4">
          <h1>Selected City</h1>
        </Col>
        <Col className="mx-3">
          <select className="search-bar rounded-pill"></select>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <Row className="status-container bg-body d-flex justify-content-center align-items-center">
            <Col className="status-left m-1"></Col>
            <Col className="status-right m-1"></Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-2">
          <div className="days bg-body"></div>
        </Col>
      </Container>
    </div>
  );
};

export default HomePage;
