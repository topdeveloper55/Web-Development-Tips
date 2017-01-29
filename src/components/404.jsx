import React from 'react';
import Helmet from 'react-helmet';
class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Sorry, this page has not been found!</h2>
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
