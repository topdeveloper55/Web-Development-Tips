import Youtube from 'react-youtube';
import React from 'react';
import ReactGA from 'react-ga';
class YoutubeContainer extends React.Component{
  constructor(props) {
    super(props);
    
    this.setState({
      id: this.props.identifier
    })
  }
  render() {
    return (
    <Youtube
      videoId={this.props.identifier}
      onStateChange={this._onStateChange.bind(this)}
    />
    )
  }
  
  _onStateChange(event) {
    var state = event.target.getPlayerState();
    if(state == 1) {
      ReactGA.event({
        category: 'Youtube',
        action: 'play',
        label: `Youtube video started. id: ${this.props.identifier}`
      })
    }
    if(state == 2) {
      ReactGA.event({
        category: 'Youtube',
        action: 'pause',
        label: `Youtube video paused. id: ${this.props.identifier}`
      })
    }
  }
}

export default YoutubeContainer;
