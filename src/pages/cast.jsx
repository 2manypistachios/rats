import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Cast from "../components/Cast/Cast";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";

class CastPage extends Component {
  render() {
    let postEdges = this.props.data;
    return (
      <Layout location={this.props.location}>
          <Helmet title={`Cast | ${config.siteTitle}`} />
          <ErrorBoundary>
            <Cast postEdges={postEdges}/>
          </ErrorBoundary>
      </Layout>
    );
  }
}

export default CastPage;
export const CastQuery = graphql`
query Cast {
  markdownRemark(
    frontmatter: {templateKey: { in: "cast" }}
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