import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import Index from "../components/Index/Index";
import Navigation from "../components/Navigation/Navigation";
import NextLatest from "../components/NextLatest/NextLatest";
import TumblrBlog from "../components/TumblrBlog/TumblrBlog";
import FooterBox from "../components/Footer/Footer";
import UserInfo from "../components/UserInfo/UserInfo";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";
import Link from "gatsby-link";

import { Section, Columns, Column, Hero, HeroBody } from "bloomer";
import { Card, CardContent, CardImage, Image } from "bloomer";


class IndexPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const tumblrEdges = this.props.data.allTumblrPost.edges;
    return (
      <Layout location={this.props.location}>
        <Helmet title={config.siteTitle} />
        <SEO />
        <ErrorBoundary>
        <Hero isSize='is-medium' isColor='black' isBold className='index-section'>
          <HeroBody hasTextAlign='centered'>       
            <Index />
            <NextLatest postEdges={postEdges} />
          </HeroBody>
        </Hero>
        <Section isMarginless>
          <Columns isMobile isMultiline className='ordered-mobile'>
            <Column isSize={{mobile:6, tablet:3}} className='center-mobile fl-1'>
              <Card>
                <CardImage>
                  <Link to="/about/"><Image src='https://bulma.io/images/placeholders/128x128.png'/></Link>
                </CardImage>
              </Card>
              <Card>
                <CardImage>
                <Link to="/cast/"><Image src='https://bulma.io/images/placeholders/128x128.png'/></Link>
                </CardImage>
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
                <CardImage>
                  <Link to="/credits/"><Image src='https://bulma.io/images/placeholders/128x128.png'/></Link>
                </CardImage>
              </Card>
              <Card>
                <CardImage>
                  <Link to="/"><Image src='https://bulma.io/images/placeholders/128x128.png'/></Link>
                </CardImage>
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
