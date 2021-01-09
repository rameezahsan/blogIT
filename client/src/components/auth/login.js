import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    //category:''
  });
  const { email, password } = formData;
// const [isVendor, setIsVendor]=usestate("false") <- ignore

// const { email, password,category } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('success!');

    
    //     if(isVendor){
    //       loginVendor(email,password); <-ignore
    //     }
    login(email, password);
    // login(email, password,category);

  };

//   const handleClick=(e)=>{
// if(e.target.id==="admin"){
    //  setFormData({...formData,category:"admin"})
// }
// else if(e.target.id==="buyer"){
     //  setFormData({...formData,category:"buyer"})
// }
// else(e.target.id==="vendor"){
     //  setFormData({...formData,category:"vendor"})
// }
//   }




  //redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/posts' />;
  }
  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Enter your Credentials
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <input type='submit' className='btn btn-success' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated, //actually gives all the things inside initialState object (check auth.js reducers)
});

export default connect(mapStateToProps, { login })(Login);
