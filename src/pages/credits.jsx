import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Credits from "../components/Credits/Credits";
import Navigation from "../components/Navigation/Navigation";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";

class CreditsPage extends Component {
  render() {
    let postEdges = this.props.data;
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Credits | ${config.siteTitle}`} />
        <ErrorBoundary>
          <Navigation/>
          <Credits postEdges={postEdges}/>
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default CreditsPage;
export const CreditsQuery = graphql`
query Credits {
  markdownRemark(
    frontmatter: {templateKey: { in: "credits" }}
  ) {
    html
    timeToRead
    excerpt
    frontmatter {
      title
      cover
      date
      tags
    }
    fields {
      slug
      date
    }
  }
}
`;