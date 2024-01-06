import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./index.scss";

export default function CategoryDeck() {
  return (
    <Container fluid id="categoryDeck">
      <Row className="justify-content-md-between gap-2">
        <Col md="auto">
          <Stack gap={2} direction="horizontal">
            <Button variant="secondary" className="w-100">All</Button>
            <Button className="w-100">Work</Button>
            <Button className="w-100">Life</Button>
            <Button className="w-100">Coding</Button>
          </Stack>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="info">Add New Idea</Button>
        </Col>
      </Row>
    </Container>
  );
}
