import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{
  render() {
    return (
      <header>
        <nav className="navbar">
    			<Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/posts">Posts</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/contact">Contact</Link>
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
