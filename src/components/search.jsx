import React from 'react';
import PostData from '../data/postData.js';
import Post from './indexPost.jsx';
import { Link } from 'react-router';

class Search extends React.Component {
  render(){
    let name = this.props.location.query.content.toLowerCase();
    let postTags = PostData.map(post => post.tags).join(',').split(',');
    postTags = postTags.filter((tag,pos) => postTags.indexOf(tag) == pos);
    let matchingTags = postTags.reduce((arr, tag, i) => {
      if(tag.toLowerCase().indexOf(name) != -1) {
        arr.push(<Link className="tag indexTag" to={`/tags/${tag.split(' ').join('-')}`}>{tag}</Link>);
      }
      return arr;
    },[])
  
    let Data = PostData.reduce((arr, post) => {
      if(post.introduction.toLowerCase().indexOf(name) != -1 || post.title.toLowerCase().indexOf(name) != -1 || post.tags.toLowerCase().indexOf(name) != -1) {
        arr.push(post);
      }
      return arr;
    },[]);
    let Posts = Data.map(p => <Post key={p.id} id={p.id} name={p.name} title={p.title} tags={p.tags} time={p.time} mainImage={p.mainImage} intro={p.introduction} content={p.content}/>);
    if(Posts.length === 0) {
      Posts = "Nothing has been found!";
    }
    if(matchingTags.length === 0) {
      matchingTags = "Nothing has been found!";
    }
    return (
      <div className="tag_container">
        <h2 className="header">Matching Posts</h2>
        {Posts}
        <h2 className="header">Matching Tags</h2>
        {matchingTags}
      </div>
    );
    /* Add Helmet eventually */
  }
}

export default Search;