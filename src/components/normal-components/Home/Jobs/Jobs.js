import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import jobsinfo from "../../../../fakedata/jobsinfo";
import SingleJob from "./SingleJob/SingleJob";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(jobsinfo);
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (
      data.keyword.trim() === "" &&
      data.job_type === "All" &&
      data.job_category === "All"
    ) {
      setJobs(jobsinfo);
    } else {
      // console.log("Piro");

      const job2 = jobsinfo.filter((job) => {
        return data.keyword === ""
          ? job.designation === data.job_category &&
              job.job_type === data.job_type
          : job.company.includes(data.keyword) ||
              job.job_type.includes(data.keyword) ||
              job.skills.includes(data.keyword) ||
              job.company.includes(data.designation) ||
              (job.designation === data.job_category &&
                job.job_type === data.job_type);
      });
      const job3 = jobsinfo.filter((job) => {
        return data.keyword === ""
          ? job.designation !== data.job_category &&
              job.job_type !== data.job_type
          : job.company.includes(data.keyword) &&
              job.designation !== data.job_category &&
              job.job_type !== data.job_type;
      });
      console.log(job3);
      setJobs(job2);
      //setJobs(...job1, ...job2, ...job3);
    }
  };

  return (
    <div className="my-5">
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Col md={3}>
              {/* <div class="input-group ">
                <input
                  type="text"
                  id="search-value"
                  class="form-control form-control-lg"
                  placeholder="Search by skills"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div> */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Search By Keywords</Form.Label>
                <Form.Control
                  type="text"
                  {...register("keyword")}
                  size="lg"
                  placeholder="Search by keyword"
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Select Job Category</Form.Label>
                <Form.Control
                  {...register("job_category")}
                  as="select"
                  size="lg"
                  custom
                >
                  <option>All</option>
                  <option>Web Developer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Web Designer</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Select Job Type</Form.Label>
                <Form.Control
                  {...register("job_type")}
                  as="select"
                  size="lg"
                  custom
                >
                  <option>All</option>
                  <option>Intern</option>
                  <option>Parttime</option>
                  <option>Fulltime</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Label></Form.Label> <br />
              <button className="btn btn-lg btn-outline-success">Search</button>
            </Col>
          </Row>
        </Form>
        <Row>
          {jobs.length ? (
            jobs.map((job) => <SingleJob job={job} />)
          ) : (
            <Col>
              {" "}
              <h2 className="text-center text-danger">No Data Found.</h2>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
