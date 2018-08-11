import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    let postEdges = this.props.data;
    return (
      <Layout location={this.props.location}>
        <Helmet title={`About | ${config.siteTitle}`} />
        <ErrorBoundary>
          <About postEdges={postEdges} />
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default AboutPage;

export const AboutQuery = graphql`
query About {
  markdownRemark(
    frontmatter: {templateKey: { in: "about" }}
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