import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import JoblyApi from '../api/api';
import JobCard from './JobCard';
import SearchForm from '../search/SearchForm';


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getJobs();
  }, [location.key])

  const getJobs = async value => {
    let jobs = await JoblyApi.getJobs(value);
    setJobs(jobs);
  }

  return (
    <Container className="my-4 col-md-8 offset-md-2">
      <SearchForm search={getJobs} />
      {jobs && jobs.length
        ? jobs.map(job => (<JobCard key={job.id} {...job} />))
        : (<Row className="my-4"><Col>Sorry, no jobs were found!</Col></Row>)}
    </Container>
  )
}

export default JobList
