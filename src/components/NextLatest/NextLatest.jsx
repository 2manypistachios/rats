import React from "react";
import { Link } from "gatsby";
import {Container, Level, LevelItem, Button} from "bloomer";
const _ = require("lodash");

class NextLatest extends React.Component {
  getPostList() {
    const postList = [];
    console.log(this.props.postEdges);
    if (this.props.postEdges) {
      postList.push({
        path:  this.props.postEdges[0].node.fields.slug,
        tags:  this.props.postEdges[0].node.frontmatter.tags,
        title: this.props.postEdges[0].node.frontmatter.title,
        date:  this.props.postEdges[0].node.fields.date,
      })
      
      _.findLast(this.props.postEdges, postEdge => {
        postList.push({
          path: postEdge.node.fields.slug,
          tags: postEdge.node.frontmatter.tags,
          title: postEdge.node.frontmatter.title,
          date: postEdge.node.fields.date,
        });
      });
    }
    console.log(postList);
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
        <Container className='index-comic'>
          <Level isMobile>
            <LevelItem>
              <Link to={postList[0].path} key={postList[0].title}><Button isColor='danger' isOutlined>First</Button></Link>
            </LevelItem>
            <LevelItem>
              <Link to={postList[1].path} key={postList[1].title}><Button isColor='success' isOutlined>Last</Button></Link>
            </LevelItem>
            </Level>
        </Container>
    );
  }
}

export default NextLatest;
