import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Post from './indexPost.jsx';

class Home extends React.Component {
  render() {
    let Posts = PostData.reduce((arr,x,i) => {
      if(i < 3) {
        arr.push(<Post key={x.id} id={x.id} title={x.title} tags={x.tags} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>)
      }
      return arr;
    },[])
    return (
      <div className="home_container">
        <h1 className="pageHeader">Home</h1>
				<Helmet
					title="Home - WebsiteDevTips"
					meta={[
						{name: "description", content: "WebsiteDevTips home - coding help and explanations. Website development programming tips for web developers and programmers. Covering topics like javascript, html, css, html5, css3, scss, and many other programming languages and topic. Learn to code with websitedevtips!"},
						{name: "keywords", content: "website dev tips,dev tips,websitedevtips.com,javascript,css,html,html5,website,code, programming,learn to code"}
					]}
				/>
        <h2 className="latestPosts">Latest Posts</h2>
        {Posts}
      </div>
    )
  }
}

export default Home;
