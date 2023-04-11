import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.jobs.content[0]?.data || []);
  console.log(jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="my-4">Remote Jobs Search</h1>
          <Link to="/favourite">
            <Badge className="fs-4" bg="secondary">
              See Favourites
            </Badge>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {query &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
