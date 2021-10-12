import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import LoginForm from './users/LoginForm';
import ProfileForm from './users/ProfileForm';
import SignupForm from './users/SignupForm';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignupForm} />
      <Route exact path='/companies' component={CompanyList} />
      <Route exact path='/companies/:handle' component={CompanyDetail} />
      <Route exact path='/jobs' component={JobList} />
      <Route path='/profile' component={ProfileForm} />
    </Switch >
  )
}

export default Routes
