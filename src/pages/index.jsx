import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Index from "../components/Index/Index";
import TumblrBlog from "../components/TumblrBlog/TumblrBlog";
import FooterBox from "../components/Footer/Footer";
import UserInfo from "../components/UserInfo/UserInfo";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";
import Link from "gatsby-link";

import { Section, Columns, Column, Hero, HeroBody } from "bloomer";
import { Card, CardContent, Title, Button } from "bloomer";


class IndexPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tumblrEdges = this.props.data.allTumblrPost.edges;
    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <ErrorBoundary>
        <Index postEdges={postEdges}/>
        <Section isMarginless>
          <Columns isMobile isMultiline className='ordered-mobile'>
            <Column isSize={{mobile:6, tablet:3}} className='center-mobile fl-1'>
              <Card>
                <CardContent>
                  <Link to="/about/">
                    <Button isColor="black" isSize="large" isInverted isFullWidth>
                      <Title>About</Title>
                    </Button>
                  </Link>
                  <Link to="/cast/">
                    <Button isColor="black" isSize="large" isInverted isFullWidth>
                      <Title>Cast</Title>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Column>
            <Column isSize={{mobile: 12, tablet:6}} className='center-mobile fl-3'>
              <Card>
                <CardContent>
                  <UserInfo config={config} />
                </CardContent>
              </Card>
              <TumblrBlog postEdges={tumblrEdges}/>
            </Column>
            <Column isSize={{mobile:6, tablet:3}} className='center-mobile fl-2'>
              <Card>
                <CardContent>
                  <Link to="/archive/">
                    <Button isColor="black" isSize="large" isInverted isFullWidth>
                      <Title>Archive</Title>
                    </Button>
                  </Link>
                  <Link to="/credits/">
                    <Button isColor="black" isSize="large" isInverted isFullWidth>
                      <Title>Credits</Title>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Column>
          </Columns>
        </Section>
        <Section>
          <FooterBox config={config}/>
        </Section>
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___page], order: ASC }
      filter: {
        frontmatter: {templateKey: {in: "comic"}}
      }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
    allTumblrPost(limit: 10, sort: {fields: [date], order: DESC}) {
      edges {
        node {
          date
          title
          body
          id
          tags
        }
      }
    }
  }
`;
