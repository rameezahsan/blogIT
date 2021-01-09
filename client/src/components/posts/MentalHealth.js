import React, { Fragment, useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const MentalHealth = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);


  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="breadcrumbs my-2">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/posts">
        <i className="fas fa-home"/>Home
        </Link>
        <Link to="/mental-health">
        <i className="fas fa-heartbeat"/>Mental Health
        </Link>
      </Breadcrumbs>
      </div>
      
      <h1 className="bg-pink" style={{color:"white", textAlign:"center",borderRadius:"4px" ,padding:"5px", marginTop:"10px"}}>
      <i className="fas fa-heartbeat"/>{'  '} Mental Health section</h1>
      
      <div className='posts'>
        {posts.map((post) => (
            post.category==="mental-health" &&
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth:state.auth,
});

// Posts.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps, { getPosts })(MentalHealth);
