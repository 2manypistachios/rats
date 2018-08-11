import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Archive from "../components/Archive/Archive";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";

class ArchivePage extends Component {
  render() {
    let postEdges = this.props.data;
    return (
      <Layout location={this.props.location}>
        <Helmet title={`Archive | ${config.siteTitle}`} />
        <ErrorBoundary>
          <Archive postEdges={postEdges}/>
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default ArchivePage;
export const ArchiveQuery = graphql`
query Archive {
  markdownRemark(
    frontmatter: {templateKey: { in: "comic" }}
  ) {
    frontmatter {
      title
      page
      tags
    }
    fields {
      slug
    }
  }
}
`;