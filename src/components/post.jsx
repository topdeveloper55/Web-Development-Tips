import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class PostPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const CurrentPost = PostData.filter(post => post.id == id)[0];
    console.log(CurrentPost.content);
    return (
      <div className="post postPageContainer">
        <img src={`../img/${CurrentPost.mainImage}`}/>
        <h1>{CurrentPost.title}</h1>
        <Helmet
					title={CurrentPost.title + " - WebsiteDevTips"}
					meta={[
						{name: "description", content: `Post page for WebsiteDevTips - ${CurrentPost.title}`}
					]}
				/>
        <time>{CurrentPost.time}</time>
        <div className="postBody">{CurrentPost.content}</div>
        <Link to="/posts">Go Back to Posts</Link>
      </div>
    )
  }
}

export default PostPage;
