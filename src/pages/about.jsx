import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
      </Layout>
    );
  }
}

export default AboutPage;

export const AboutQuery = graphql`
query About {
  markdownRemark(
    frontmatter: {templateKey: { eq: "about" }}
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
