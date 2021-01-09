import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
        <div className="breadcrumbs my-2">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/posts">
        <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/">
        {/* <Typography className="text-dark large"> */}
        <i className='fas fa-user'/> visiting profile
        {/* </Typography> */}
        </Link>
      </Breadcrumbs>
      </div>
          {/* <Link to='/posts' className='btn btn-pink my-2'>
            back to posts
          </Link> */}
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-primary'>
                edit profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />

            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((singleExp) => (
                    <ProfileExperience
                      key={singleExp._id}
                      experience={singleExp}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>no experience</h4>
              )}
            </div>

            <div class='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((singleEdu) => (
                    <ProfileEducation
                      key={singleEdu._id}
                      education={singleEdu}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>no education</h4>
              )}
            </div>

            {/* {profile.githubusername && (
              <ProfileGithub githubusername={profile.githubusername} />
            )} */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getProfileById })(Profile);
