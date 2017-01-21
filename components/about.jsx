import React from 'react';
import my_image from '../images/my_image.jpg';
class About extends React.Component {
	render() {
		return (
			<div className="about_container">
				<h1>About</h1>

				<img style={{width: "200px"}} src={my_image}/>

				<p>My personal website (wip)</p>

				<a href="https://edwin0258.github.io/Portfolio/">https://edwin0258.github.io/Portfolio/</a>
			</div>
		)
	}
}

export default About;
