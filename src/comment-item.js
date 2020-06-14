import React from 'react';

const CommentItem = (props) => {
  // console.log(props)
  const className = props.isVisible ? 'visible': 'hidden';

  return (
    <ul
      className={className}
    >
      <li>{props.author}</li>
      <li>{props.commentText}</li>
      <li>{props.date}</li>
      <button className="formButton" onClick = {props.removeComment}>Delete</button>
    </ul>
  )
}

export default CommentItem;
