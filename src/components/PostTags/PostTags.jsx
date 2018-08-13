import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Container, Tag } from "bloomer";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <Container>
        {tags && tags.map(tag => (
            <Link key={tag} style={{ textDecoration: "none" }} to={`/archive/${_.kebabCase(tag)}`}>
              <Tag>{tag}</Tag>
            </Link>
          ))}
      </Container>
    );
  }
}

export default PostTags;
