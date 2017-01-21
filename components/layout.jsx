import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{
  render() {
    return (
      <header>
        <nav>
    			<Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
    		</nav>
      </header>
    )
  }
}

class Layout extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>

        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
