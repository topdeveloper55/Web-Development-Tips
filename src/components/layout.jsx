import React from 'react';
import { Link, browserHistory } from 'react-router';

class Header extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      search: "",
      menuClass: "",
      scrollMenu: false
    }
    
  }
  handleChange(e) {
    this.setState({search: e.target.value});
  }
  handleKeyPress(e) {
    if(e.key == "Enter") {
      this.handleClick(e.target.value);
    }
  }
  handleClick(x){
    browserHistory.push(`/search?content=${x}`);
  }
  
  toggleMenu() {
    var newClass = (!this.state.menuClass) ? "expandNav" : "";
    this.setState({menuClass: newClass});
  }
  
  componentDidUpdate(prevProps,prevState) {
    if(this.state.menuClass != prevState.menuClass) {
      this.handleScroll();
    }
  }
  
  handleScroll() {
    let menuClass = this.state.menuClass;
    if(window.scrollY >= 50 && !!menuClass === false) {
      this.setState({scrollMenu: true});
    } else if(window.scrollY < 50 || !!menuClass === true){
      this.setState({scrollMenu: false});
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  render() {
    
    return (
      <header className="heading">
        <nav className="navbar">
    			<Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/posts">Posts</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/contact">Contact</Link>
    		</nav>
    		<div className="mobileNavButton" onClick={this.toggleMenu.bind(this)}>
    		  <div className={`bars ${(this.state.menuClass) ? "closeBars" : ""}`}></div>
    		</div>
    		<nav className={`mobileNavbar ${this.state.menuClass}`}>
    			<Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/posts">Posts</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/contact">Contact</Link>
    		</nav>
    		<div className={`secondaryBar ${(this.state.scrollMenu) ? "scrollMenu" : ""}`}>
    		  <Link to="/" className="logoBtn"><h1>WebsiteDevTips >_</h1></Link>
    		  <div className="search">
      		  <input type="text" placeholder="search" value={this.state.search} onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleChange.bind(this)}/>
      		  <button className="baseBtn searchBtn" onClick={()=> this.handleClick(this.state.search)}>Go</button>
    		  </div>
    		</div>
      </header>
    );
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
