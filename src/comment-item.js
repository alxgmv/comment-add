import React from 'react';

const CommentItem = (props) => {
  return (
    <ul>
      <li>{props.author}</li>
      <li>{props.commentText}</li>
      <li>{props.date}</li>
      <button className="formButton" onClick = {props.removeComment}>Delete</button>
    </ul>
  )
}

export default CommentItem;
