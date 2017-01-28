import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
class Post extends React.Component {
	render() {
		let mainImage = this.props.mainImage ? <img src={`/img/${this.props.mainImage}`}/> : "";
		return (
			<div className="post">
				<div className="mainImage">{mainImage}</div>
				<h2>{this.props.title}</h2>
				<time>{this.props.time}</time>

				<p>{this.props.intro.slice(0, 200) + "..."}</p>
				<Link to={`/posts/${this.props.id}`}>Read More..</Link>
			</div>
		)
	}
}



class Posts extends React.Component {
	render() {
		let AllPosts = PostData.map(x => {
			return <Post key={x.id} id={x.id} title={x.title} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>
		})
		return (
			<div className="posts_container">
				<h1>Posts</h1>
				<Helmet
					title={"Posts - WebsiteDevTips"}
					meta={[
						{name: "description", content: "Posts page for WebsiteDevTips"}
					]}
				/>
			{AllPosts}
			</div>
		)
	}
}

export default Posts;
