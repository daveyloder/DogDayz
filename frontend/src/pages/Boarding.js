import React from "react";
import { Container, Row, Col } from "reactstrap";

const Boarding = () => {
  return (
    <Container className="p-5">
      <Row className="text-center pb-5">
        <Col>
          <h4 className="display-6">Dog Pick-up, Dropoffs, and Boarding</h4>
        </Col>
      </Row>

      {/* Dog Pick-up and Drop-off */}
      <Row>
        <Col md={6}>
          <img className="img-fluid" src="https://via.placeholder.com/500x350/" />
        </Col>
        <Col md={6}>
          <h5 className="pb-3">Pick-up and Drop-off</h5>
          <p>
            Every dog is important to us and sometimes it helps to have the
            kennel come to you. If you do not have time to come to the kennel
            then our specialized truck can easily arrive to your address and
            pick-up your best friend and handle everything from there.
          </p>
          <ul>
            <li>
              Pick-ups and Drop-offs availible within 25 miles of kennel
              location.
            </li>
            <li>
              Flexible attended and unattended appointments.*
            </li>
            <li>
              Specialized truck for dogs of all sizes to offer the highest
              standard of safety in transportation
            </li>
          </ul>
          <p>
            Pick-up rates start at $75.00 with an additional $1.00 per mile to
            and from the address to the kennel. Drop-off is included with
            pick-up.
          </p>

          <p>
            *Unattended pick-ups do require access to the address in which a key
            or code for smart home locks are required for this service.
          </p>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col md={6}>
          <img className="img-fluid" src="https://via.placeholder.com/500x350/" />
        </Col>
        <Col md={6}>
          <h5 className="pb-3">Boarding</h5>
          <p>
            Our kennel is designed for your best friend in mind. Each space is
            heated and air conditioned to ensiure your pet is comfortable during
            their stay with us.
          </p>
          <p>
            Boarding rates start at $40.00 per day for a single pet, and $60 per
            day for two pets sharing the same space. Service included with your
            pet's stay includes:
          </p>
          <ul>
            <li> Individual outdoor runs and playtime.</li>
            <li> Supervised group play with other guest of the kennel. </li>
            <li>
              {" "}
              Careful observation and minor wellness checks with our onsite vet
              technician.
            </li>
          </ul>
          <p>
            We recommend that food, with instructions be provided prior to your
            pet's stay with us. We are able to provide food, but may come at
            additional cost as varies to each circumstance.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Boarding;
