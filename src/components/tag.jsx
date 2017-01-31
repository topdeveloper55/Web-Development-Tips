import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import PostData from '../data/postData.js';
import Post from './indexPost.jsx';

class TagPage extends React.Component {
  render() {
    let name = this.props.params.name;
    function addDashed(x) {
      return x.map(m => m.split(' ').join('-'));
    }
    let matchingPosts = PostData.reduce((arr, post) => {
      if(addDashed(post.tags.split(',')).indexOf(name) != -1) {
        arr.push(post);
      }
      return arr;
    },[])
    let keywords = matchingPosts.map(post => post.keywords).join(',');
    let description = matchingPosts.map(post => post.introduction).join(',');
    let Posts = matchingPosts.map((arr,x) => {
      return <Post key={x.id} id={x.id} name={x.name} title={x.title} tags={x.tags} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>
    })
    return (
      <div>
      {Posts}
      <Helmet
        title={`${name} - WebsiteDevTips`}
        meta={[
          {name: "description",content: `${name.split('-').join(' ')} tag - ${description.slice(0,200 || description.length)}`},
          {name: "keywords", content: `${name.split('-').join(' ')}, ${keywords}`}
        ]}
      />
      </div>
    )
  }
}

export default TagPage;
