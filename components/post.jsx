import React from 'react';
import PostData from '../data/postData.jsx';

class PostPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const CurrentPost = PostData.filter(post => post.id == id)[0];
    return (
      <div>
        <h1>{CurrentPost.title}</h1>
        <p>{CurrentPost.content}</p>
      </div>
    )
  }
}

export default PostPage;
