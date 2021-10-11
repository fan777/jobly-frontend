import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './CompanyCard.css'

const CompanyCard = ({ company }) => {
  const { handle, name, description, logoUrl } = company;
  return (
    <Card className="CompanyCard my-4" tag={Link} to={`/companies/${handle}`}>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        {logoUrl ? <img src={logoUrl} alt={name} /> : ""}
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default CompanyCard
