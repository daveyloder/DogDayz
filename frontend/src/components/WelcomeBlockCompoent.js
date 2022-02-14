import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class WelcomeBlock extends Component {
  render() {
    return (
      <Container className="p-5">
        <Row>
          <Col>
            <h2>Welcome!</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="pt-2">
            <h4>
              DogDayz Kennel and Obedience training serves the South Jersey area
              with convenience and the best service possible.
            </h4>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur provident placeat delectus dolores similique
              voluptatem porro commodi, non cum libero atque eius quisquam sequi
              alias accusamus rerum suscipit, labore repudiandae quibusdam odit
              maiores voluptatibus omnis sapiente nihil. Alias rem in quam omnis
              accusantium iusto tempora explicabo, commodi voluptates sed vitae
              quod itaque aut illo modi ipsum dolorem? Nulla vel debitis ipsam?
              Nobis tempora, ullam consequuntur, totam debitis blanditiis quas
              repellat laudantium minima praesentium libero nulla commodi quis
              obcaecati autem culpa omnis! Iure soluta dolore fugiat? Debitis
              voluptatum est officia, rem quam ex fuga dicta sed esse obcaecati
              earum molestiae a deserunt ad consectetur velit eveniet facere
              ratione dolor eum natus? Quis fugiat sapiente neque nihil
              molestiae dolor minima esse, veniam culpa sit necessitatibus!
              Enim, mollitia ad voluptas vitae obcaecati optio dicta! Enim culpa
              optio corporis maxime, asperiores officiis, maiores incidunt
              pariatur voluptatibus vero alias quia autem ducimus? Enim, aut
              veniam.
            </p>
            <h6>Give us a call for an appointment today</h6>
            <h3>
              <a className="text-decoration-none" href={`tel:19999999999`}>
                1-999-999-9999
              </a>
            </h3>
          </Col>
          <Col>
          <img
              className="rounded"
              src="https://via.placeholder.com/500/?text=PuppyPicture"
              alt="Picture Of Dog"
            />
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}
export default WelcomeBlock;
