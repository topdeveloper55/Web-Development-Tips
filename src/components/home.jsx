import React from 'react';
import PostData from '../data/postData.jsx';
import { Link } from 'react-router';
class Post extends React.Component {
	render() {
		let mainImage = this.props.mainImage ? <img src={`/img/${this.props.mainImage}`}/> : "";
		return (
			<div className="post">
				<div className="mainImage">{mainImage}</div>
				<h2>{this.props.title}</h2>
				<time>{this.props.time}</time>

				<p>{this.props.content.slice(0, 200) + "..."}</p>
				<Link to={`/posts/${this.props.id}`}>Read More..</Link>
			</div>
		)
	}
}


class Home extends React.Component {
  render() {
    let Posts = PostData.reduce((arr,x,i) => {
      if(i < 3) {
        arr.push(<Post key={x.id} id={x.id} title={x.title} time={x.time} mainImage={x.mainImage} content={x.content}/>)
      }
      return arr;
    },[])
    return (
      <div className="home_container">
        <h1>Home</h1>

        <h2>Latest Posts</h2>
        {Posts}
      </div>
    )
  }
}

export default Home;
