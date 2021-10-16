import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import './JobCard.css'

const JobCard = ({ id, title, salary, equity, companyName }) => {
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
