import React from 'react';
import Helmet from 'react-helmet';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = ({
			name: "",
			email: "",
			title: "",
			message: ""
		});
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		var date = new Date;
    var fullDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    var message = {
    	name: this.state.name,
    	email: this.state.email,
    	title: this.state.title,
    	message: this.state.message,
    	date: fullDate
    };
    
    $.ajax({
    	type: "POST",
    	url: "/post-contact",
    	data: JSON.stringify(message)
    });
    
    this.setState({name: "", email: "", title: "", message: ""});
	}
	handleChange(e){
		this.setState({[e.target.id]: e.target.value});
	}
	render() {
		return (
			<div className="contact_container">
				<h1>Contact</h1>
				<Helmet
					title="Contact - WebsiteDevTips"
					meta={[
						{name: "description", content: "Contact page for websitedevtips - Ask questions or contact me."},
						{name: "keywords", content: "websitedevtips.com,website dev tips,developer tips,contact,contact me,question"}
					]}
				/>
				<div className="contactForm" data-aos="fade-down-back" data-aos-once="true" data-aos-duration="1000">
					<form onSubmit={this.handleSubmit}>
            <div className="input">
              <input type="text" id="name" className="textInput" value={this.state.name} onChange={this.handleChange}/>
              
              <label htmlFor="name">Name</label>
            </div>
            
            <div className="input">
              <input type="text" id="email" className="textInput" value={this.state.email} onChange={this.handleChange}/>
              
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="input">
              <input type="text" id="title" className="textInput" value={this.state.title} onChange={this.handleChange}/>
              
              <label htmlFor="title">Title</label>
            </div>
            <div className="input">
              <textarea type="text" id="message" className="textArea" value={this.state.message} onChange={this.handleChange}/>
              
              <label htmlFor="message">Message</label>
            </div>
            
            <button className="baseBtn" type="submit">Send Message</button>
        	</form>
         </div>
				<p>Or contact me here > <a href="mailto:edwin0258@websitedevtips.com" target="_blank">edwin0258@websitedevtips.com</a></p>
			</div>
		)
	}
}

export default Contact;
