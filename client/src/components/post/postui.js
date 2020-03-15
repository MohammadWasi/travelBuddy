import React, { Component } from 'react'
import { connect } from 'react-redux';
import './post.css';
import postimg from '../../img/postimg1.jpg';
import LikeBtn from '../../img/likeBtn.js.js';
import CommentSvg from '../../img/commentSvg';
import PostComment from './PostComment'

const Post = (props) => {
  console.log(props);

    return (
    <div className="container-post">
      <div className="post-top">
 <div className="profile-img"><img src={postimg} alt="Avatar" /> </div>
 <div className="post-action"><i className="fas fa-ellipsis-h"></i>
</div>
</div>
<div className="card">
  <img src={postimg} alt="Avatar" />
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
    <div className="likes-count">100 Likes</div>
    <div className="caption">
    <p><b>Jane Doe</b></p> 
    <p>Interior Designer</p>
    </div>
    <div className="view-comments"> view all 100 Comments</div>
    <div className="view-comments">Timestamps</div>
    <div className="add-comment"><PostComment /></div>

  </div>
</div>
    </div>
    );
}
export default Post;