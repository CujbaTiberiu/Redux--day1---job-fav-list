import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Favorites = () => {
  const favContainer = useSelector((state) => state.favs.content);

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup variant="flush">
            {favContainer.map((fav) => (
              <ListGroup.Item
                className="d-flex justify-content-between"
                Key={fav._id}
              >
                <p>
                  <span className="fw-bold">Name</span> -{" "}
                  <a href={fav.url} alt="company website">
                    {fav.company_name}
                  </a>{" "}
                </p>
                <p>
                  <span className="fw-bold">Title</span> - {fav.title}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link to="/">
            <Badge className="fs-4" bg="secondary">
              Go Back
            </Badge>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
