import { Col, Container, Row } from "react-bootstrap";
import IdeaCard from "../IdeaCard";
import "./index.scss";

export default function IdeasDeck() {
  return (
    <>
    <Container>
      <Row xs={1} sm={2} lg={3} xl={4} className="ideas-row">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return (
            <Col className="ideas-col" key={i}>
              <IdeaCard num={i} />
            </Col>
          );
        })}
      </Row>
    </Container>
    </>
  );
}
