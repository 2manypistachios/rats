import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Tag } from "bloomer";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/archive/${_.kebabCase(tag)}`}
            >
              <Tag>{tag}</Tag>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
