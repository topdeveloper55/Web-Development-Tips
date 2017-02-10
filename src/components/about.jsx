import React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component {
	render() {
		return (
			<div className="about_container">
				<h1>About</h1>
				<Helmet
						title="About - WebsiteDevTips"
						meta={[
							{name: "description", content: "About page for websitedevtips - learn more about the project and me."},
							{name: "keywords", content: "websitedevtips.com,about,about page,about websitedevtips,websitedevtips about"}
						]}
				/>
				<img style={{width: "200px"}} src="../img/my_image.jpg" alt="An image of Devin Miller"/>

				<p>My personal website (wip)</p>

				<a href="https://edwin0258.github.io/Portfolio/">https://edwin0258.github.io/Portfolio/</a>
			</div>
		)
	}
}

export default About;
