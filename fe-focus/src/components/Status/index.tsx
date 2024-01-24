import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { buttonActiveClass, statusButtons } from "./definations/constant";
import "./index.scss";
import { useState } from "react";
import { Properties } from "./definations/types";

export default function StatusDeck({ filterIdeas }: Properties) {
  const [statusActive, setStatusActive] = useState(0);

  const handleStatus = (id: number) => setStatusActive(id);

  return (
    <Container fluid id="categoryDeck">
      <Row className="justify-content-md-between gap-2">
        <Col md="auto">
          <Stack gap={2} direction="horizontal">
            {statusButtons.map((button, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === statusActive ? `${buttonActiveClass}` : ""
                  }
                >
                  <Button
                    variant={button.variant}
                    onClick={() => {
                      handleStatus(index);
                      filterIdeas(button);
                    }}
                  >
                    {button.value}
                  </Button>
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
