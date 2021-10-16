import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import JoblyApi from '../api/api';
import JobCard from './JobCard';
import SearchForm from '../SearchForm';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, [])

  async function getJobs(search) {
    let jobs = await JoblyApi.getJobs(search);
    setJobs(jobs);
  }

  return (
    <Container className="my-4 col-md-8 offset-md-2">
      <SearchForm searchFunc={getJobs} />
      {jobs && jobs.length
        ? jobs.map(job => (<JobCard key={job.id} {...job} />))
        : (<Row className="my-4"><Col>Sorry, no jobs were found!</Col></Row>)}
    </Container>
  )
}

export default JobList
