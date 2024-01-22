import { Button, Container, Form } from "react-bootstrap";
import "./styles.scss";
import DropDown from "../../shared/Dropdown";
import { Properties } from "./definations/types";

export default function FormDeck({ ideaProp, manageIdea }: Properties) {
  return (
    <>
      <Container fluid id="formDeck">
        <Form className="mx-3">
          <Form.Group className="mb-3">
            <Form.Label>Idea Title</Form.Label>
            <Form.Control
              className="text-bg-light"
              type="text"
              value={ideaProp.title}
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
              value={ideaProp.description}
            />
          </Form.Group>
          <Button>Add Your Idea</Button>
        </Form>
      </Container>
    </>
  );
}
