import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import JoblyApi from '../api/api';
import JobCard from '../jobs/JobCard';

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      let company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, [handle])

  if (company === undefined)
    return <Redirect to='/' />

  if (company) {
    const { name, description, jobs } = company;
    return (
      <Container className="my-4 col-md-8 offset-md-2">
        <h5>{name}</h5>
        <p>{description}</p>
        {jobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </Container>
    )
  }

  return "";
}

export default CompanyDetail
