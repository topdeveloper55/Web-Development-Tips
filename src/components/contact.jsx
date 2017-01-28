import React from 'react';
import Helmet from 'react-helmet';
class Contact extends React.Component {
	render() {
		return (
			<div className="contact_container">
				<h1>Contact</h1>
				<Helmet
					title="Contact - WebsiteDevTips"
					meta={[
						{name: "description", content: "Contact page for WebsiteDevTips"}
					]}
				/>
				<p><a href="mailto:edwin0258@websitedevtips.com" target="_blank">edwin0258@websitedevtips.com</a></p>
			</div>
		)
	}
}

export default Contact;
