import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, user, category,title,likes, comments, date },
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img
            className='round-img'
            src='https://www.w3schools.com/w3images/avatar2.png'
            alt=''
          />
          <h4>{name}</h4>
        </Link>
      </div>

      

      <div>
      {title && <Link to={`/post/${_id}`}>
      <p className="blog-title">{title}</p>
      </Link> }
        
        <p className='my-1'>{text}</p>
        {category &&
        <Link to={`/${category}`}>
        <p className="category-link">
        category: {category}
        </p>
        </Link> 
        }
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              type='button'
              className='btn btn-light'
              onClick={(e) => addLike(_id)}
            >
              <i className='fas fa-thumbs-up'></i>{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              type='button'
              className='btn btn-light'
              onClick={(e) => removeLike(_id)}
            >
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/post/${_id}`} className='btn btn-dark'>
             <i className="fas fa-comments"/> Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>

            {!auth.loading && user === auth.user._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={(e) => deletePost(_id)}
              >
               <i className="fas fa-trash"/>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
