import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentItem from './comment-item';

/* eslint-disable no-unused-expressions */

class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
          {
            author: 'author: moderator',
            commentText: 'comment text: test message',
            date: new Date().toLocaleString()
          }
        ],
          newCommentText: '',
          newAuthor:'',
          isVisible: true
  }
    this.handleSubmit = this.handleSubmit.bind(this),
    this.handleChange = this.handleChange.bind(this),
    this.removeComment = this.removeComment.bind(this)
  }

   removeComment(i) {
     let fields = this.state.fields.slice();
     fields.splice(i, 1);
     this.setState({ fields });
  }


  handleChange(ev) {
    this.setState({
      [ev.target.name]:ev.target.value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    const fields = [...this.state.fields];
    if ( this.state.newAuthor !=='' && this.state.newCommentText !=='' ) {
      fields.push({
        author: this.state.newAuthor,
        commentText: this.state.newCommentText,
        date: new Date().toLocaleString(),
      });
      this.setState( {fields} );
      this.setState({
        isVisible: true
      })
    } else {
      alert("empty field!");
    }
    console.log('addcomment');
    console.log(this.state.isVisible);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.fields.map((field, i) => {
              return (
                <CommentItem
                    key={i}
                    author={field.author}
                    commentText={field.commentText}
                    date={field.date}
                    removeComment={this.removeComment.bind(this, i)}
                    isVisible={this.state.isVisible}
                 />
              )
            })
          }
        </div>

        <div>
          <form className="CommentForm" onSubmit={this.handleSubmit}>
            <label>
              Author name:
              <input
                name="newAuthor"
                className="CommentInput"
                type="text"
                placeholder="Name"
                value={this.state.newAuthor}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Comment text:
              <textarea
                name="newCommentText"
                className="CommentText"
                type="submit"
                placeholder="Comment text"
                value={this.state.newCommentText}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" className="formButton">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Comment />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
