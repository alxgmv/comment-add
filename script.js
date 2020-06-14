import CommentItem from './comment-item'

class Comment extends React.Component {
  constructor() {
    super();
    this.state =
      {
        fields : [
          {
            author: 'author: moderator',
            commentText: 'comment text: test message',
            date: new Date().toLocaleString(),
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

  removeComment(key) {
    const currentState = [...this.state.isVisible];
    this.setState({isVisible: !currentState});
    console.log(key)
    console.log(this.state.isVisible)
  }


  handleChange(ev) {
    this.setState({
      [ev.target.name]:ev.target.value
    });
  }


  handleSubmit(ev) {
    ev.preventDefault();
    const fields = [...this.state.fields];
    if ( this.state.newAuthor !='' && this.state.newCommentText !='' ) {
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
                    author={field.name}
                    commentText={field.commentText}
                    date={field.date}
                    removeComment={this.removeComment.bind(this, i)}
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
  <Comment />,
  document.getElementById('app')
);
