import React from 'react';
import PostData from '../data/postData.js';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class PostPage extends React.Component {
  render() {
    const name = this.props.params.name;
    const CurrentPost = PostData.filter(post => post.name == name)[0];

    return (
      <div className="post postPageContainer">
        <Helmet
          title={CurrentPost.title + " - WebsiteDevTips"}
          meta={[
            {name: "description", content: `WebsiteDevTips - ${CurrentPost.title} ${CurrentPost.introduction}`},
            {name: "keywords", content: `${CurrentPost.keywords}`}
          ]}
        />
        <div className="postHeader">
          <img src={`../img/${CurrentPost.mainImage}`}/>
          <h1>{CurrentPost.title}</h1>

          <time>{CurrentPost.time}</time>
        </div>

        <div className="postBody">{CurrentPost.content}</div>
        <Link className="baseBtn" to="/posts">Go Back to Posts</Link>
      </div>
    )
  }
}

export default PostPage;
