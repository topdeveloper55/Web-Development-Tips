import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import PostData from '../data/postData.jsx';

export class Tags extends React.Component {
  render() {
    let postTags = PostData.map(post => post.tags).join(',');
    let allTags = postTags.split(',').reduce((obj, tag) => {
      obj[tag] = ++obj[tag] || 1;
      return obj;
    },{})
    let tagsWithCount = [];
    for(var key in allTags){
      tagsWithCount.push(<Link className="tag indexTag" to={`/tags/${key.split(' ').join('-')}`}>{key} - <span>{allTags[key]}</span></Link>);
    }
    return (
      <div className="tags">{tagsWithCount.slice(0,this.props.length || tagsWithCount.length)}</div>
    )
  }
}

export class TagsPage extends React.Component {
  render() {
    return (
      <div className="tags_container">
				<h1 className="pageHeader">Tags</h1>
				<Helmet
					title={"Tags - WebsiteDevTips"}
				/>
			<Tags/>
			</div>
    )
  }
}
