import { Button, Container, Form } from "react-bootstrap";
import "./styles.scss";
import DropDown from "../../shared/Dropdown";
import { Properties } from "./definations/types";

export default function FormDeck({
  ideaProp,
  manageIdea,
  clickHandler,
}: Properties) {
  return (
    <>
      <Container fluid id="formDeck">
        <Form className="mx-3">
          <Form.Group className="mb-3">
            <Form.Label>Idea Title</Form.Label>
            <Form.Control
              className="text-bg-light"
              type="text"
              name="title"
              value={ideaProp.title}
              onChange={manageIdea}
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
              name="description"
              as="textarea"
              rows={3}
              value={ideaProp.description}
              onChange={manageIdea}
            />
          </Form.Group>
          <Button onClick={clickHandler}>Add Your Idea</Button>
        </Form>
      </Container>
    </>
  );
}
