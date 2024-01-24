import { FileSignature, Trash, Check } from "lucide-react";
import { Button, Card, Stack } from "react-bootstrap";
import "./index.scss";
import { Properties } from "./definations/types";
import { Link } from "react-router-dom";

export default function IdeaCard({ idea }: Properties) {
  return (
    <>
      <Card className="idea-card">
        <Card.Header>{`${idea.title} ${idea.id}`}</Card.Header>
        <Card.Body>
          {idea.status && (
            <Stack className="idea-category">
              <Card.Text className={`bg-${idea.status.variant} text-white`}>
                {idea.status.value}
              </Card.Text>
            </Stack>
          )}
          <Card.Text className="idea-description">{idea.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning">
            <Link to={`update/${idea.id}`}>
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
