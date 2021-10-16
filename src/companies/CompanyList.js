import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import JoblyApi from '../api/api';
import CompanyCard from './CompanyCard';
import SearchForm from '../search/SearchForm';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, [])

  async function getCompanies(value) {
    let companies = await JoblyApi.getCompanies(value);
    setCompanies(companies);
  }

  return (
    <Container className="my-4 col-md-8 offset-md-2">
      <SearchForm search={getCompanies} />
      {companies && companies.length
        ? companies.map(company => (<CompanyCard key={company.handle} {...company} />))
        : (<Row className="my-4"><Col>Sorry, no companies were found!</Col></Row>)}
    </Container>
  )
}

export default CompanyList