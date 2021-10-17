import { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import UserContext from '../users/userContext';

import './JobCard.css'

const JobCard = ({ id, title, salary, equity, companyName }) => {
  const { applyJob, appliedJobs } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    function getApplied() {
      setApplied(appliedJobs.has(id))
    }
    getApplied();
  }, [applied, id, appliedJobs])

  const handleApply = async e => {
    let apply = await applyJob(id);
    if (apply.success) {
      setApplied(true);
    } else {
      console.log(apply.err)
    }
  }

  return (
    <Card className="JobCard my-4">
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{companyName}</CardSubtitle>
        <CardText>
          Salary: {salary}<br />
          Equity: {equity}
        </CardText>
        <button className="btn btn-danger" onClick={handleApply} disabled={applied}>{applied ? "Applied" : "Apply"}</button>
      </CardBody>
    </Card>
  )
}

export default JobCard
