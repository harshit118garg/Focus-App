import { FileSignature, Trash, Check } from "lucide-react";
import { Button, Card, Stack } from "react-bootstrap";
import "./index.scss";
import { Properties } from "./definations/types";
import { Link } from "react-router-dom";

export default function IdeaCard({ num }: Properties) {
  return (
    <>
      <Card className="idea-card">
        <Card.Header>{`Card Title ${num}`}</Card.Header>
        <Card.Body>
          <Stack className="idea-category">
            <Card.Text style={{ background: "black" }}>
              {"Card Category"}
            </Card.Text>
          </Stack>
          <Card.Text className="idea-description">
            {
              "Some quick example text to build on the card title and make up the bulk of the card's content"
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="success">
            <Link to={`update/${num}`}>
              <FileSignature />
            </Link>
          </Button>
          <Button variant="primary">
            <Check />
          </Button>
          <Button variant="danger">
            <Trash />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
