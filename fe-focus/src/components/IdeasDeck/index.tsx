import { Col, Container, Row } from "react-bootstrap";
import IdeaCard from "../IdeaCard";
import "./index.scss";
import { Properties } from "./definations/types";

export default function IdeasDeck({ ideas }: Properties) {
  return (
    <>
      <Container>
        <Row xs={1} sm={2} lg={3} xl={4} className="ideas-row">
          {ideas.map((idea) => {
            return (
              <Col className="ideas-col" key={idea.id}>
                <IdeaCard idea={idea} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
