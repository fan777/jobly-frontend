import { useState } from 'react';
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const SearchForm = ({ searchFunc }) => {
  const initialState = { search: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchFunc(formData.search)
    setFormData(initialState);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input type="text" name="search" id="search" placeholder="Enter search term" value={formData.search} onChange={handleChange} />
          <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  )
}

export default SearchForm
