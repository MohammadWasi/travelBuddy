import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import '../post/post.css';
import postimg from '../../img/postimg1.jpg';
import PropTypes from 'prop-types';
import LikeBtn from '../../img/likeBtn.js.js';
import CommentSvg from '../../img/commentSvg';
import PostComment from '../post/PostComment';

import { addLike, removeLike, deletePost } from '../../actions/post';

const Post = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, caption,imgUrl,name, avatar, liked, user, likes, comments,date },
  likeInfo,
  commentInfo,
  showActions
}) => {
  const isLiked = (id, user) => {
    if (likeInfo[user].isLiked) {
      removeLike(id, user);
      return;
    }
    addLike(id, user);
  }
  const topComments = commentInfo[_id].comments;
    return (
    <div className="container-post">
      <div className="post-top">
 <div className="profile-img"><img src={avatar} alt="Avatar" /> </div>
 <div className="post-action"><i className="fas fa-ellipsis-h"></i>
</div>
</div>
<div className="card">
  <img src={imgUrl} alt="Avatar" />
  <div className="post-content">
    <div className="post-action">
      <span className="like-btn"><button className="like-btn-btn">
        <LikeBtn fill={likeInfo[user].isLiked ? '#ed4956' : '#262626'} onClick={() => isLiked(_id, user)}/>
        </button></span>
      <span className="comment-icon">
        <button className="comment-btn">
          <CommentSvg />
        </button>
      </span>
    </div>
    <div className="likes-count"> {likeInfo[user].likeCount} Likes</div>
    <div className="caption">
    <p><b>{name}</b></p> 
    <p>{caption}</p>
    </div>
    <div className="view-comments"> view all {comments.length} Comments</div>
    {topComments.length > 0 ?  topComments.map((comment) => (
    <div className="top-comments" key={comment._id}> {comment.name} &nbsp;&nbsp;<span>{comment.text}</span></div>

    )) : ''}

    <div className="post-timestamp">{date}</div>
    <div className="add-comment"><PostComment postId={_id} /></div>

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

// const mapDispatchToProps = dispatch => {
//   const 
//   return { addLike, removeLike, deletePost }
// }

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(Post);
