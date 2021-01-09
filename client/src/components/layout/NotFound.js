import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i>
        Page not found!
      </h1>
      <p>this page doesn't exist...</p>
    </Fragment>
  );
};

export default NotFound;
