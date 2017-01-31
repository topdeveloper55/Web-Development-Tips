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
    let Data = PostData.reduce((arr, post) => {
      if(addDashed(post.tags.split(',')).indexOf(name) != -1) {
        arr.push(post);
      }
      return arr;
    },[])
    let Posts = Data.map(p => <Post key={p.id} id={p.id} name={p.name} title={p.title} tags={p.tags} time={p.time} mainImage={p.mainImage} intro={p.introduction} content={p.content}/>);
    let keywords = Data.map(post => post.keywords).join(',');
    let description = Data.map(post => post.introduction).join(',');
    console.log(Posts);
    return (
      <div className="tag_container">
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
