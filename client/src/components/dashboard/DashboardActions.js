import React from 'react';
import { Link } from 'react-router-dom';
const DashboardActions = (props) => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-pink'>
        <i className='fas fa-user-cog'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-pink'>
        <i className='fab fa-black-tie'></i> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-pink'>
        <i className='fas fa-graduation-cap'></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
