import React from 'react';
import { Link } from 'react-router';


class Post extends React.Component {
	render() {
		
		let mainImage = this.props.mainImage ? <img src={`/img/${this.props.mainImage}`} alt="Post header image"/> : "";
		let tags = this.props.tags.split(',').map(tag => <Link className="tag" to={`/tags/${tag.split(' ').join('-')}`}>{tag}</Link>);
		let daysAgo = Math.floor(( Date.parse(new Date()) - Date.parse(this.props.time)) / 86400000);
		return (
			<div className="post" data-aos-easing="ease-in-out-cubic" data-aos="fade" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
				<div className="postHeader">
					<div className="mainImage">{mainImage}</div>
					<h2 className="header">{this.props.title}</h2>
					<time className="date">{this.props.time}</time>
				</div>
				<div className="postBody">
					<hr className="seperator"/>
					<p>{this.props.intro.slice(0, 200) + "..."}</p>
				</div>
				<div className="days_ago">
			    <div className="daysAgo">{daysAgo} days ago</div>
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
