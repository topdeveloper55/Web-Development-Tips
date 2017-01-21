import React from 'react';

class Post extends React.Component {
	render() {
		return (
			<div className="post">
				<h2>{this.props.title}</h2>
				<time>{this.props.time}</time>
				<p>{this.props.content}</p>
			</div>
		)
	}
}



class Posts extends React.Component {
	render() {
		return (
			<div className="posts_container">
				<h1>Posts</h1>
				<Post
					title="Hello World"
					content="Lionfish kelpfish Pacific viperfish, bocaccio electric
					stargazer scat. Crucian carp pumpkinseed ghost knifefish clown loach
					bluntnose minnow bangus tiger shark angelfish? Prowfish--elephant fish
					lemon sole, temperate ocean-bass yellowtail clownfish sabertooth fish
					clown loach, pencilsmelt, queen triggerfish? Weever yellowtail horse
					mackerel, queen danio New Zealand smelt flagblenny powen. Airsac catfish
					freshwater shark Black angelfish kissing gourami tigerperch cowfish roundhead.
					Porbeagle shark Jack Dempsey ghost pipefish; white shark peamouth
					large-eye bream. Albacore louvar livebearer queen parrotfish sea
					dragon; torpedo morid cod sardine pilchard ropefish Ganges shark dory,
					 prickly shark flier threadfin cichlid. Pigfish mora; climbing perch
					 trout; perch; pike characid snubnose eel snake eel fingerfish, kokopu;
					  crappie pomfret halibut slimy mackerel barramundi."
					time="11/14/2017"
					/>
			</div>
		)
	}
}

export default Posts;
