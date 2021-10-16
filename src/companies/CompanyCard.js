import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './CompanyCard.css'

const CompanyCard = ({ handle, name, description, logoUrl }) => {
  return (
    <Card className="CompanyCard my-4" tag={Link} to={`/companies/${handle}`}>
      <CardBody>
        {logoUrl ? <img src={logoUrl} alt={name} /> : ""}
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default CompanyCard
