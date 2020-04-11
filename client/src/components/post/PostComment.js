import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const PostComment = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className='post-form'>
      <form
        className='form comment-form'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='1'
          placeholder='Add a comment'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-comment my-1' value='Post' />
      </form>
    </div>
  );
};

PostComment.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(PostComment);
