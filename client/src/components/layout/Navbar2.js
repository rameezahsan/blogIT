import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Button from '@material-ui/core/Button';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      {/* <li>
        <Link to='/profiles'>
          <i className='fas fa-user-friends' />{' '}
          <span className='hide-sm'>Developers</span>
        </Link>
        </li> */}

        <li>
        <Link to='/posts'>
        <i className="fas fa-home"></i>{' '}
          <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>My Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      {/* <li>
        <Link to='/profiles'>
          <i className='fas fa-user-friends' />{' '}
          <span className='hide-sm'>Developers</span>
        </Link>
      </li> */}
      <li>
        <Link to='/register'>
        <i className="fas fa-user-plus"/>{' '}
        <span>Register</span>
        </Link>
      </li>

      <li>
        <Link to='/login'>
        <i className="fas fa-sign-in-alt"/>{' '}
        <span>Login</span>
        </Link>
      </li>
    </ul>
  );

  
  return (
    <nav className='navbar2 bg-pink2'>
      {/* <h1>
        <Link to='/posts'>
        </Link>
      </h1> */}
      {!loading && (
        <Fragment> 
                <ul>
                    <li>
                    <Link to="/mental-health">
                    <Button  variant="contained" color="secondary"><i className="fas fa-heartbeat"/>{' '} Mental Health</Button>
                    </Link>
                    </li>

                    <li>
                    <Link to="/it-and-tech">
                    <Button variant="contained" color="secondary"><i className="fas fa-mobile"/>{' '} IT and Tech</Button>
                    </Link>
                    </li>

                    <li>
                    <Link to="/politics">
                    <Button variant="contained" color="secondary"><i className="fas fa-landmark"/>{' '} Politics</Button>
                    </Link>
                    </li>
                </ul>
        </Fragment>
      )}
    </nav>
  );
};
{/* <i class="fas fa-landmark"></i> */}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
