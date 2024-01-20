import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { buttonActiveClass } from "./definations/constant";
import "./index.scss";
import { Link } from "react-router-dom";
import { statuses } from "../../global/definations/constants";

export default function StatusDeck() {
  return (
    <Container fluid id="categoryDeck">
      <Row className="justify-content-md-between gap-2">
        <Col md="auto">
          <Stack gap={2} direction="horizontal">
            <div className={`w-100 ${buttonActiveClass}`}>
              <Button variant="secondary">All</Button>
            </div>
            {statuses.map((status, index) => {
              return (
                <div key={index} className={`w-100`}>
                  <Button>{status.value}</Button>
                </div>
              );
            })}
          </Stack>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="info">
            <Link to={"/addnew"}>Add New Idea</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
