import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPost } from '../../actions/post';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
// const res= await axios.get(`/api/profiles/${}`)
  return loading || post == null ? (
    <Spinner />
  ) : (
    <div className="my-2">
      {/* <Link to='/posts' className='btn btn-pink'>
        back to blogs
      </Link> */}
      <div className="breadcrumbs my-2">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/posts">
        <i className="fas fa-home"></i> Home
        </Link>
        <Link to={`/post/${post._id}`}>
        <i className='fas fa-file'/> {post.title}
        </Link>
      </Breadcrumbs>
      </div>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='bg-dark p'>
        <h3 style={{textAlign:"center"}}><i className="fas fa-comments"/> Comment Section</h3>
      </div>
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getPost })(Post);
