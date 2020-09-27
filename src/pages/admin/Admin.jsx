import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main.jsx';
import Header from '../../components/adminComponents/Header/Header.jsx';
import User from './pages/users.jsx';
import Analytic from './pages/analytics.jsx';
import Traffic from './pages/traffic.jsx';
import Project from './pages/projects.jsx';

class Admin extends React.Component {
  render() {
    return (
      <div className='container mx-auto flex flex-row justify-center'>
        <div className='items-center flex flex-col justify-start h-screen w-3/4'>
          <Header />
          <div className='container w-full mx-auto'>
            <Switch>
              <Route exact path='/admin/analytics' component={Analytic} />
              <Route exact path='/admin/users' component={User} />
              <Route exact path='/admin/traffic' component={Traffic} />
              <Route exact path='/admin/Projects' component={Project} />
              <Route path='/admin' component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
