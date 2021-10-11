import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';

import JoblyApi from '../api/api';
import SearchForm from '../SearchForm';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, [])

  return (
    <Container className="my-4 col-md-8 offset-md-2">
      <SearchForm />
      {companies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </Container>
  )
}

export default CompanyList
