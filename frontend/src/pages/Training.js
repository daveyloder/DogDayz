import React from "react";
import { Container, Row, Col } from "reactstrap";

const Training = () => {
  return (
    <Container className="p-5">
      <Row className="pb-5 text-center">
        <Col>
          <h4 className="display-6">Dog Obedience Training</h4>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5>Our Training Services</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum in
            aliquid, minus reprehenderit autem excepturi alias corporis
            eligendi, eveniet, a deleniti. Delectus dolor accusamus sequi fugit.
            Distinctio, doloremque ullam!
          </p>
        </Col>
        <Col md={6}>
          <img className="img-fluid" src="https://via.placeholder.com/500x350" />
        </Col>
      </Row>
    </Container>
  );
};

export default Training;
