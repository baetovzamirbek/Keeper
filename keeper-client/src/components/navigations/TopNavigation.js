import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';

const TopNavigation = ({ nickname, logout, location }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
          <Image src='/assets/note.png' alt='Logo' height={25} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav activeHref={location.pathname}>
        <LinkContainer to='/dashboard'>
          <NavItem>Dashboard</NavItem>
        </LinkContainer>
        <LinkContainer to='/archive'>
          <NavItem>Archive</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem role='button' onClick={() => logout()}>
          <span className='glyphicon glyphicon-log-out'> Logout</span>
        </NavItem>
      </Nav>
      <Navbar.Text pullRight>
        <span className='glyphicon glyphicon-user'> {nickname}</span>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

TopNavigation.propTypes = {
  nickname: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    nickname: state.user.nickname
  };
}

export default connect(mapStateToProps, { logout })(TopNavigation);
