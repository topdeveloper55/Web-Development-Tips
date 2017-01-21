import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';
class Post extends React.Component {
	render() {
		let mainImage = this.props.mainImage ? <img src={this.props.mainImage}/> : "";
		return (
			<div className="post">
				<div className="mainImage">{mainImage}</div>
				<h2>{this.props.title}</h2>
				<time>{this.props.time}</time>

				<p>{this.props.content}</p>
				<Link to={`/posts/${this.props.id}`}>Read More..</Link>
			</div>
		)
	}
}



class Posts extends React.Component {
	render() {
		let AllPosts = PostData.map(x => {
			return <Post key={x.id} id={x.id} title={x.title} time={x.time} mainImage={x.mainImage} content={x.content}/>
		})
		return (
			<div className="posts_container">
				<h1>Posts</h1>
				{AllPosts}
			</div>
		)
	}
}

export default Posts;
