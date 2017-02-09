import React from 'react';
import Helmet from 'react-helmet';
import $ from 'jquery';
class Contact extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = ({
			name: "",
			email: "",
			title: "",
			message: ""
		})
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
    }
    
    $.ajax({
    	type: "POST",
    	url: "/post-contact",
    	data: JSON.stringify(message)
    })
    
    this.setState({name: "", email: "", title: "", message: ""});
	}
	handleName(e){
		this.setState({name: e.target.value})
	}
	handleEmail(e){
		this.setState({email: e.target.value})
	}
	handleTitle(e){
		this.setState({title: e.target.value})
	}
	handleMessage(e){
		this.setState({message: e.target.value})
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
					<form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input">
                <input type="text" id="name" className="textInput" value={this.state.name} onChange={this.handleName.bind(this)}/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="input">
                <input type="text" id="email" className="textInput" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                <label htmlFor="email">Email</label>
            </div>
            <div className="input">
                <input type="text" id="title" className="textInput" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="input">
                <textarea type="text" id="message" className="textArea" value={this.state.message} onChange={this.handleMessage.bind(this)}/>
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
