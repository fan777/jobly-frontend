import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import './JobCard.css'

const JobCard = ({ job }) => {
  // const { id, title, salary, equity, companyName } = job;
  const { title, salary, equity, companyName } = job;
  return (
    <Card className="JobCard my-4">
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{companyName}</CardSubtitle>
        <CardText>
          Salary: {salary}<br />
          Equity: {equity}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default JobCard
