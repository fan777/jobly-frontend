import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';
import JobsList from './JobsList.js';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/companies'>
        <CompaniesList />
      </Route>
      <Route path='/jobs'>
        <JobsList />
      </Route>
    </Switch>
  )
}

export default Routes
