import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
    {/* <p className='lead' style={{fontSize:"40px"}}>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p> */}
      <div className="breadcrumbs my-2">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/posts">
        <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/dashboard">
        {/* <Typography className="text-dark large"> */}
        <i className='fas fa-user'/> My Profile
        {/* </Typography> */}
        </Link>
      </Breadcrumbs>
      </div>
      
      <h1 className='large text-primary bg-dark my-2' style={{textAlign:"center"}}>My Profile</h1>
      
      {profile !== null ? (
       
        //{isVendor ? vendorUI : userUI}
        
        <Fragment>
        
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2 danger-zone'>
          <h1> 
          <i className="fas fa-caret-right"/> DANGER ZONE
          </h1>
            <button className='btn  btn-danger del-account' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'></i>
              Delete Account
            </button>
          </div>


        </Fragment>
      ) : (
        <Fragment>
          <h1>oops! looks like you haven't setup a profile yet.</h1>
          <div style={{textAlign:"center"}}>
          <Link
            style={{ marginLeft: '10px',marginTop:"30px" }}
            to='/create-profile'
            className='btn btn-pink btn-large'
          >
            setup one!
          </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
