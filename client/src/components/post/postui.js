import React, { Component } from 'react'
import { connect } from 'react-redux';
import './post.css';
import postimg from '../../img/postimg1.jpg';
import PropTypes from 'prop-types';
import LikeBtn from '../../img/likeBtn.js.js';
import CommentSvg from '../../img/commentSvg';
import PostComment from './PostComment';

import { addLike, removeLike, deletePost } from '../../actions/post';

const Post = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  console.log(addLike);

    return (
    <div className="container-post">
      <div className="post-top">
 <div className="profile-img"><img src={avatar} alt="Avatar" /> </div>
 <div className="post-action"><i className="fas fa-ellipsis-h"></i>
</div>
</div>
<div className="card">
  <img src={avatar} alt="Avatar" />
  <div className="post-content">
    <div className="post-action">
      <span className="like-btn"><button className="like-btn-btn">
        <LikeBtn />
        </button></span>
      <span className="comment-icon">
        <button className="comment-btn">
          <CommentSvg />
        </button>
      </span>
    </div>
    <div className="likes-count">{likes} Likes</div>
    <div className="caption">
    <p><b>{name}</b></p> 
    <p>{text}</p>
    </div>
    <div className="view-comments"> view all 100 {comments} Comments</div>
    <div className="view-comments">Timestamps</div>
    <div className="add-comment"><PostComment /></div>

  </div>
</div>
    </div>
    );
}

Post.defaultProps = {
  showActions: true
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(Post);
