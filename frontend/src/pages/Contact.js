import React from "react";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

const Contact = () => {
  return (
    <Container className="p-5">
      <Form>
        <FormGroup>
          <Label for="contactName">Name</Label>
          <Input
            type="text"
            name="contactName"
            id="contactName"
            placeholder="Please enter your name."
          />
          <Label for="contactEmail">Email</Label>
          <Input
            type="email"
            name="contactEmail"
            id="contactEmail"
            placeholder="Please enter your email."
            />
            <Label for="contactPhone">Phone Number</Label>
            <Input
              type="phone"
              name="contactPhone"
              id="contactPhone"
              placeholder="Please enter your phone number."
              />
              <Label for="contactMessage">Message</Label>
              <Input
                type="textarea"
                name="contactMessage"
                id="contactMessage"
                />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
