import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
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
        <Link to='/write-post'>
        <Button variant="contained" color="secondary" size="medium" style={{marginTop:"-3px"}}>
        <i className="fas fa-pencil-alt"></i>{' '}
          <span className='hide-sm'>write a blog</span>
        </Button>
        </Link>
      </li>
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
        <Link to='/write-post'>
        <Button variant="contained" color="secondary" size="medium" style={{marginTop:"-3px"}}>
        <i className="fas fa-pencil-alt"></i>{' '}
          <span className='hide-sm'>write a blog</span>
        </Button>
        </Link>
      </li>
      <li>
        <Link to='/register'>
        <i className="fas fa-user-plus"/>{' '}
        <span className="hide-sm">Register</span>
        </Link>
      </li>

      <li>
        <Link to='/login'>
        <i className="fas fa-sign-in-alt"/>{' '}
        <span className="hide-sm">Login</span>
        </Link>
      </li>
    </ul>
  );

  
  return (
    <nav className='navbar bg-dark2'>
      <h1>
        <Link to='/posts'>
        <i class="fas fa-blog"></i> BLOGIT.COM
        </Link>
      </h1>
      {/* <div className="search-container">
        <form>
        <input style={{fontSize:"20px",background:"#ffffff",borderRadius:"5px",width:"350px",height:"43px"}} placeholder="search a blog..."/>
        <Button style={{height:"42px",marginBottom:"4px"}} color="secondary" variant="contained"><SearchIcon/></Button>
        </form>
     </div> */}
      {!loading && (
        <Fragment> {isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
