import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Navbar2 from './components/layout/Navbar2';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';

import Login from './components/auth/login';
import Register from './components/auth/register';
// redux stuff below
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import MentalHealth from './components/posts/MentalHealth';
import ItAndTech from './components/posts/ItAndTech';
import Politics from './components/posts/Politics';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import PostForm from './components/posts/PostForm';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Navbar2/>
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/mental-health' component={MentalHealth} />
              <PrivateRoute exact path='/it-and-tech' component={ItAndTech} />
              <PrivateRoute exact path='/politics' component={Politics} />
              {/* <Route component={NotFound} /> */}
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute exact path='/post/:id' component={Post} />
              <PrivateRoute exact path='/write-post' component={PostForm} />
              {/* <PrivateRoute exact path='/mental-health' component={MentalHealth} />
              <PrivateRoute exact path='/it-and-tech' component={ItAndTech} />
              <PrivateRoute exact path='/politics' component={Politics} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
