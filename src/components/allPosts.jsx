import Post from './indexPost.jsx';
import PostData from '../data/postData.js';
import React from 'react';

class AllPosts extends React.Component {
  render() {
    let posts = PostData.reduce((arr,x,i) => {
      if(i < this.props.len) {
        x.editor = x.editor || false;
        arr.push(<Post key={x.id} id={x.id} name={x.name} title={x.title} editor={x.editor} tags={x.tags} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>);
      }
      return arr;
    },[]);
    
    return(
      <div className="allPosts">
        <h1 className="header">{this.props.header}</h1>
        {posts}
      </div>
    )
  }
}

export default AllPosts;