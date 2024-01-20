import { CheckSquare } from "lucide-react";
import { Badge, Container, Navbar } from "react-bootstrap";

export default function Navigationbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary rounded-2 shadow-lg">
        <Container>
          <Navbar.Brand href="/" className="text-uppercase fw-bolder">
            Ideas
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Badge
                bg="success"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="This top tooltip is themed via CSS variables."
              >
                <CheckSquare />
              </Badge>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
