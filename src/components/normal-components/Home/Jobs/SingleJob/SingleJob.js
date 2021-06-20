import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
const SingleJob = (props) => {
  const {
    company,
    job_description,
    job_type,
    salary,
    skills,
    designation,
    experience,
    deathline,
  } = props.job;
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Text>{job_description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span className="text-success font-weight-bold">Post:</span>
            {designation}
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">
              Skills Required:
            </span>
            {skills}
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">Job Type:</span>
            {job_type}
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success Class	font-weight-bold">
              Experience Required:
            </span>{" "}
            {experience}
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success Class	font-weight-bold">
              Salary Range:
            </span>{" "}
            {salary}
          </ListGroupItem>
          <ListGroupItem>
            <span className="text-success font-weight-bold">
              Application Deathline:
            </span>
            {deathline}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#" className="w-100">
            <button className="btn btn-success w-100">Apply Now</button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleJob;
