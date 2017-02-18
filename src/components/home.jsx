import React from 'react';
import PostData from '../data/postData.js';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import AllPosts from './allPosts.jsx';
import {Tags} from './tags.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="home_container">
				<Helmet
					title="Home - WebsiteDevTips"
					meta={[
						{name: "description", content: "WebsiteDevTips home - coding help and explanations. Website development programming tips for web developers and programmers. Covering topics like javascript, html, css, html5, css3, scss, and many other programming languages and topic. Learn to code with websitedevtips!"},
						{name: "keywords", content: "website dev tips,dev tips,websitedevtips.com,javascript,css,html,html5,website,code, programming,learn to code"}
					]}
				/>
        <AllPosts len={3} header="Latest Posts"/>
        <div className="popularTags">
          <h1 className="header">Popular Tags</h1>
          <Tags length={4}/>
          <Link className="baseBtn" to="/tags">More Tags</Link>
        </div>
        
      </div>
    )
  }
}

export default Home;
