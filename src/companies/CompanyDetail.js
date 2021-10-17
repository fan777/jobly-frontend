import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

import JoblyApi from '../api/api';
import JobCard from '../jobs/JobCard';

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      await JoblyApi.getCompany(handle)
        .then(company => setCompany(company))
        .catch(err => setAlerts(err))
    }
    getCompany();
  }, [handle])

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

  if (alerts) {
    return (
      <Container className="my-4 col-md-8 offset-md-2">
        {alerts && alerts.map((alert, index) => <div className="alert alert-danger" key={index}>{alert}</div>)}
      </Container>
    )
  }

  return "";
}

export default CompanyDetail
