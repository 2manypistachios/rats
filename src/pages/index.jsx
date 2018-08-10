import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Index from "../components/Index/Index";
import Navigation from "../components/Navigation/Navigation";
import NextLatest from "../components/NextLatest/NextLatest";
import TumblrBlog from "../components/TumblrBlog/TumblrBlog";
import config from "../../data/SiteConfig";

import { Section, Container, Columns, Column, Hero, HeroBody, Level, LevelItem, Title, Subtitle } from "bloomer";
import { Card, CardImage, CardContent, Image, Button, Footer, Content, Icon } from "bloomer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

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
                  <Image src='https://bulma.io/images/placeholders/128x128.png'/>
                </CardImage>
              </Card>
              <Card>
                <CardImage>
                  <Image src='https://bulma.io/images/placeholders/128x128.png'/>
                </CardImage>
              </Card>
            </Column>
            <Column isSize={{mobile: 12, tablet:6}} className='center-mobile fl-3'>
              <TumblrBlog postEdges={tumblrEdges}/>
            </Column>
            <Column isSize={{mobile:6, tablet:3}} className='center-mobile fl-2'>
              <Card>
                <CardImage>
                  <Image src='https://bulma.io/images/placeholders/128x128.png'/>
                </CardImage>
              </Card>
              <Card>
                <CardImage>
                  <Image src='https://bulma.io/images/placeholders/128x128.png'/>
                </CardImage>
              </Card>
            </Column>
          </Columns>
        </Section>
        <Section>
          <Footer id='footer'>
            <Container>
                <Content>
                    <Columns>
                        <Column>
                            <p>
                                Made with <Icon hasTextColor="danger" className="fa fa-heart"></Icon>  
                                by <a>2ManyPistachios</a>. Just too many.
                            </p>
                        </Column>
                    </Columns>
                    <Content isSize='small'>
                        <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
                    </Content>
                </Content>
            </Container>
          </Footer>
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
      sort: { fields: [fields___date], order: DESC }
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
