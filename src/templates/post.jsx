import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import Navigation from "../components/Navigation/Navigation";
import NextPrevious from "../components/NextPrevious/NextPrevious";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import { Section, Column, Columns, Content, Level, LevelItem } from "bloomer";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout location={this.props.location}>
        <Navigation />
        <Section isPaddingless isMarginless>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Columns isCentered>
            <Column isSize={{mobile:12, tablet:12, desktop: 8, widescreen: 6}} has-text-centered>
              <Level>
                <LevelItem hasTextAlign="centered">
                 <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
                </LevelItem>
              </Level>
            </Column>
          </Columns>
          <NextPrevious postNode={postNode}/>
          <div className="post-meta">
            <PostTags tags={post.tags} />
          </div>
          <Disqus postNode={postNode} />
        </Section>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug }},
      frontmatter: {templateKey: { eq: "comic" }}
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
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
