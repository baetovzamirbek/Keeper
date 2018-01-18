import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import UserRoute from './UserRoute';
import GuestRoute from './GuestRoute';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../pages/DashboardPage';
import ArchivePage from '../pages/ArchivePage';
import PublicNotePage from '../pages/PublicNotePage';
import LogPage from '../pages/LogPage';
import SearchResultPage from '../pages/SearchResultPage';

const Routes = ({ location, ...rest }) => (
  <div>
    <GuestRoute
      {...rest}
      location={location}
      path='/signup'
      exact
      component={SignupPage}
    />
    <GuestRoute
      {...rest}
      location={location}
      path='/login'
      exact
      component={LoginPage}
    />

    <UserRoute
      {...rest}
      location={location}
      path='/dashboard'
      exact
      component={DashboardPage}
    />
    <UserRoute
      {...rest}
      location={location}
      path='/logs'
      exact
      component={LogPage}
    />
    <UserRoute
      {...rest}
      location={location}
      path='/archive'
      exact
      component={ArchivePage}
    />
    <Route
      {...rest}
      location={location}
      path='/notes/public/:note'
      exact
      component={PublicNotePage}
    />
    <UserRoute
      {...rest}
      location={location}
      path='/search'
      exact
      component={SearchResultPage}
    />
  </div>
);

Routes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Routes;
