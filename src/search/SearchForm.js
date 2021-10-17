import { useState } from 'react';
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const SearchForm = ({ search }) => {
  const [searchVal, setSearchVal] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setSearchVal(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    search(searchVal.trim() || undefined)
    setSearchVal("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input type="text" name="search" id="search" placeholder="Enter search term" value={searchVal} onChange={handleChange} />
        <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
      </InputGroup>
    </Form>
  )
}

export default SearchForm
