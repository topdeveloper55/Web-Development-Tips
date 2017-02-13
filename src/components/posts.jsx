import React from 'react';
import PostData from '../data/postData.js';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Post from './indexPost.jsx';


class Posts extends React.Component {
	render() {
		let AllPosts = PostData.map(x => {
			x.editor = x.editor || false;
			return <Post key={x.id} id={x.id} name={x.name} editor={x.editor} title={x.title} tags={x.tags} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>;
		})
		let AllDescription = PostData.map(x => {
			return x.introduction;
		}).join('');
		let AllKeywords = PostData.map(x => {
			return x.keywords;
		}).join(',');
		return (
			<div className="posts_container">
				<h1 className="pageHeader">Posts</h1>
				<Helmet
					title={"Posts - WebsiteDevTips"}
					meta={[
						{name: "description", content: `Posts page for WebsiteDevTips - ${AllDescription}`},
						{name: "keywords", content: `${AllKeywords}`}
					]}
				/>
			{AllPosts}
			</div>
		)
	}
}

export default Posts;
