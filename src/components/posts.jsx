import React from 'react';
import PostData from '../data/postData.js';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Post from './indexPost.jsx';
import AllPosts from './allPosts.jsx';

class Posts extends React.Component {
	render() {
		let AllDescription = PostData.map(x => {
			return x.introduction;
		}).join('');
		let AllKeywords = PostData.map(x => {
			return x.keywords;
		}).join(',');
		return (
			<div className="posts_container">
				<Helmet
					title={"Posts - WebsiteDevTips"}
					meta={[
						{name: "description", content: `Posts page for WebsiteDevTips - ${AllDescription}`},
						{name: "keywords", content: `${AllKeywords}`}
					]}
				/>
				<AllPosts len={PostData.length} header="Posts"/>
			</div>
		)
	}
}

export default Posts;
