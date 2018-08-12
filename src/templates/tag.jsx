import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Navigation from "../components/Navigation/Navigation";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

import {Title, Section} from "bloomer";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <div className="tag-container">
          <Helmet title={`All comics under "${tag}" | ${config.siteTitle}`} />
          <Navigation/>
          <Section textAlign="center">
            <Title>{tag}</Title>
            <PostListing postEdges={postEdges} />
          </Section>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
