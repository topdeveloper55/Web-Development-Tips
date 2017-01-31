import React from 'react';
import Helmet from 'react-helmet';
class NotFound extends React.Component {
  render() {
    return (
      <div className="container_404">
        <h2>Sorry, this page has not been found!</h2>
        <p>Try using the navigation above to find the page you are looking for.</p>
        <Helmet
            title="404 - WebsiteDevTips"
            meta={[
              {name: "description", content: "404 websitedevtips - page has not been found."},
              {name: "keywords", content: "404,websitedevtips.com,page not found"}
            ]}
        />
      </div>
    )
  }
}

export default NotFound;
