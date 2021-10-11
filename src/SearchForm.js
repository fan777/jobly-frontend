import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';

const SearchForm = () => {
  return (
    <div>
      <Form>
        <InputGroup>
          <Input type="text" name="search" id="search" placeholder="Enter search term" />
          <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  )
}

export default SearchForm
