import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';

class PostPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const CurrentPost = PostData.filter(post => post.id == id)[0];
    return (
      <div className="post postPageContainer">
        <img src={`../img/${CurrentPost.mainImage}`}/>
        <h1>{CurrentPost.title}</h1>
        <time>{CurrentPost.time}</time>
        <p>{CurrentPost.content}</p>
        <Link to="/posts">Go Back to Posts</Link>
      </div>
    )
  }
}

export default PostPage;
