import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
	render() {
		
		let mainImage = this.props.mainImage ? <img src={`/img/${this.props.mainImage}`} alt="Post header image"/> : "";
		let tags = this.props.tags.split(',').map(tag => <Link className="tag" to={`/tags/${tag.split(' ').join('-')}`}>{tag}</Link>);
		let daysAgo = Math.floor(( Date.parse(new Date()) - Date.parse(this.props.time)) / 86400000);
		let codeEditor = this.props.editor ? <em style={{color: "red"}}>code editor included</em> : "";
		let leftAmount = "60";
		if(daysAgo == 0){
			daysAgo = "Today";
		} else {
			//Turn to weeks if many many daysAgo
			daysAgo = daysAgo > 49 ? Math.floor(daysAgo/7) + " weeks ago" : `${daysAgo} days ago`;
			leftAmount = daysAgo.length * 9;
		}
		
		const randomEffect = Math.floor(Math.random() * (2 - 0) + 0) ? "fade-left" : "fade-right";
		return (
			<div className="post">
				<div className="postHeader">
					<div className="mainImage">{mainImage}</div>
					<h2 className="header">{this.props.title}</h2>
					<time className="date" style={{left: leftAmount}}>{this.props.time}</time>
					{codeEditor}
				</div>
				<div className="postBody">
					<hr className="seperator"/>
					<p>{this.props.intro.slice(0, 200) + "..."}</p>
				</div>
				<div className="days_ago">
			    <div className="daysAgo">{daysAgo}</div>
			  </div>
			  <div className="tagsAbsolute">
			    {tags}
			  </div>
				<Link className="baseBtn absoluteBtn" to={`/posts/${this.props.name}`}>Read More</Link>
			</div>
		)
	}
}

export default Post;
