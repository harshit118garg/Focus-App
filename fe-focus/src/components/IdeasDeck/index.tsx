import { Col, Container, Row } from "react-bootstrap";
import IdeaCard from "../IdeaCard";
import "./index.scss";
import { Properties } from "./definations/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function IdeasDeck({ ideas, handleDelete }: Properties) {
  const { filteredStatus } = useSelector((state: RootState) => state.getIdeas);

  const filteredIdeas =
    filteredStatus?.value === "All"
      ? ideas
      : ideas?.filter((idea) => idea.status?.value === filteredStatus?.value);

  return (
    <>
      <Container>
        <Row xs={1} sm={2} lg={3} xl={4} className="ideas-row">
          {filteredIdeas?.map((idea) => {
            return (
              <Col className="ideas-col" key={idea.id}>
                <IdeaCard idea={idea} deleteHandler={handleDelete} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
