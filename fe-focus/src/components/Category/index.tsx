import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { buttonActiveClass } from "./definations/constant";
import "./index.scss";

export default function CategoryDeck() {
  return (
    <Container fluid id="categoryDeck">
      <Row className="justify-content-md-between gap-2">
        <Col md="auto">
          <Stack gap={2} direction="horizontal">
            <div className={`${buttonActiveClass} w-100`}>
              <Button variant="secondary">All</Button>
            </div>
            <div className={`w-100`}>
              <Button>Work</Button>
            </div>
            <div className={`w-100`}>
              <Button>Life</Button>
            </div>
            <div className={`w-100`}>
              <Button>Coding</Button>
            </div>
          </Stack>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="info">Add New Idea</Button>
        </Col>
      </Row>
    </Container>
  );
}
