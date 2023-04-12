import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { removeFav } from "./redux/actions";

const Favourites = () => {
  const favContainer = useSelector((state) => state.favs.content);
  console.log(favContainer);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="mx-auto text-center">
          <h2 className="my-4">Your saved jobs</h2>
          {favContainer.length > 0 ? (
            <ListGroup variant="flush">
              {favContainer.map((fav, i) => (
                <ListGroup.Item
                  className="d-flex justify-content-between"
                  key={fav._id + i}
                >
                  <p>
                    <span className="fw-bold">Name</span> -{" "}
                    <a href={fav.url} alt="company website">
                      {fav[0]}
                    </a>{" "}
                  </p>
                  <p>
                    <span className="fw-bold">Title</span> - {fav.title}
                  </p>
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(removeFav(fav._id))}
                  >
                    Remove
                  </Button>{" "}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <h2>No jobs added to favourites</h2>
          )}

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

export default Favourites;
