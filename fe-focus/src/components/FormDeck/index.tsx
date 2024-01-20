import { Button, Container, Form } from "react-bootstrap";
import "./styles.scss";
import DropDown from "../../shared/Dropdown";

export default function FormDeck() {
  return (
    <>
      <Container fluid id="formDeck">
        <Form className="mx-3">
          <Form.Group className="mb-3">
            <Form.Label>Idea Title</Form.Label>
            <Form.Control
              className="text-bg-light"
              type="text"
              placeholder="Your Idea"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Idea Status</Form.Label>
            <DropDown />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Idea Description</Form.Label>
            <Form.Control
              className="text-bg-light"
              placeholder="Idea Description"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button>Add Your Idea</Button>
        </Form>
      </Container>
    </>
  );
}
