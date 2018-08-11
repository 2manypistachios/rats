import React, { Component } from "react";
import { Link } from "gatsby";
import { Section, Container, Columns, Column, Tile, Title, Button } from "bloomer";
import "./Archive.css";
const _ = require("lodash");

Number.prototype.pad = function(size) {
  var sign = Math.sign(this) === -1 ? '-' : '';
  return sign + new Array(size).concat([Math.abs(this)]).join('0').slice(-size);
}

class Archive extends Component {
  render() {
    const postEdges = this.props.postEdges;
    let chapters = [];
    postEdges.forEach(edge => {
      edge.node.frontmatter.tags.forEach(tag => {
        if (!_.includes(chapters, tag)) {
          chapters.push(tag);
        }
      });
    });

    return (
      <Section>
        <Title isSize={2}>Archive</Title>
        <Columns isCentered isMultiline>
        {chapters.map((chapter, index) => (
          <Column key={index}>
            <Title isSize={6}>{chapter}</Title>
            <ChapterPages postEdges={postEdges} chapter={chapter} key={chapter}/>
          </Column>
        ))}
        </Columns>
      </Section>
    );
  }
}

class ChapterPages extends Component {
  render() {
    const {chapter, postEdges} = this.props;
    const nodes = [];
    postEdges.forEach(edge => {
      console.log(edge);
      if (_.includes(edge.node.frontmatter.tags,chapter)) {
        nodes.push(edge.node);
      } else {
        console.log("tags: ",edge.node.frontmatter.tags, "did not container chapter: ",chapter);
      }
    })
    console.log("nodes",nodes);

    return (
    <Container>
      {nodes.map(node => (
        <Tile key={node.id}>
          <Link to={node.fields.slug}><Button>{node.frontmatter.page.pad(4)}</Button></Link>
        </Tile>
      ))}
    </Container>
    )};
}
export default Archive;
