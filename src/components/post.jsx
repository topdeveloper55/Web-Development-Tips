import React from 'react';
import PostData from '../data/postData.js';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import $ from 'jquery';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ({
      name: "",
      comment: "",
      comments: []
    })
  }
  handleName(e) {
    this.setState({name: e.target.value})
  }
  handleComment(e) {
    this.setState({comment: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    var body = {
      name: this.state.name,
      comment: this.state.comment,
      postName: this.props.params.name
    }
    $.ajax({
      type: "POST",
      url: "/insert",
      data: JSON.stringify(body),
    }).done(function(data){
      console.log('done');
    }).fail(function(){
      console.log("fail");
    })
  }
  componentDidMount(){
    $.ajax({
      url: "/get-data",
      success: function(data) {
        var tempComments = data.reduce((arr,comment) => {
          if(comment.postName == this.props.params.name) {
            arr.push(
            <div className="comment">
              <div className="commentName">{comment.name}</div>
              <p className="commentBody">{comment.comment}</p>
            </div>)
          }
          return arr;
        },[]);
        this.setState({comments: tempComments})
      }.bind(this)
    })
  }
  render() {
    const name = this.props.params.name;
    const CurrentPost = PostData.filter(post => post.name == name)[0];

    return (
      <div>
        <div className="post postPageContainer">
          <Helmet
            title={CurrentPost.title + " - WebsiteDevTips"}
            meta={[
              {name: "description", content: `WebsiteDevTips - ${CurrentPost.title} ${CurrentPost.introduction}`},
              {name: "keywords", content: `${CurrentPost.keywords}`}
            ]}
          />
          <div className="postHeader">
            <img src={`../img/${CurrentPost.mainImage}`} alt="Post header image"/>
            <h1>{CurrentPost.title}</h1>
  
            <time>{CurrentPost.time}</time>
          </div>
  
          <div className="postBody">{CurrentPost.content}</div>
          <Link className="baseBtn" to="/posts">Go Back to Posts</Link>
        </div>
        <div className="post postPageContainer">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
            </div>
            <div className="input">
                <p>Comment</p>
                <textarea type="text" value={this.state.comment} onChange={this.handleComment.bind(this)}/>
            </div>
            <button className="baseBtn" type="submit">Comment</button>
          </form>
        </div>
        <div className="comments">
        {this.state.comments}
        </div>
      </div>
    )
  }
}

export default PostPage;
