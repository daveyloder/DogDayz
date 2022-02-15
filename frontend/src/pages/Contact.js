import React from "react";
import { Button, Container, Col, Form, FormGroup, Label, Input } from "reactstrap";

const Contact = () => {
  return (
    <Container className="p-5">
      <Form>
        <FormGroup row>
          <Label sm={2} for="contactName">Name</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Please enter your name."
            />
          </Col>
          <Label sm={2} for="contactEmail">Email</Label>
          <Col sm={10}>
            <Input
              type="email"
              name="contactEmail"
              id="contactEmail"
              placeholder="Please enter your email."
              />
          </Col>
            <Label sm={2} for="contactPhone">Phone Number</Label>
            <Col sm={10}>
              <Input
                type="phone"
                name="contactPhone"
                id="contactPhone"
                placeholder="Please enter your phone number."
                />
            </Col>
              <Label sm={2} for="contactMessage">Message</Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="contactMessage"
                  id="contactMessage"
                  />
              </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
