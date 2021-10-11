import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';

import JoblyApi from '../api/api';
import SearchForm from '../SearchForm';
import JobCard from './JobCard';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, [])

  return (
    <Container className="my-4 col-md-8 offset-md-2">
      <SearchForm />
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </Container>
  )
}

export default JobList
