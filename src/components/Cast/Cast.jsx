import React, { Component } from "react";
import "./Cast.css";

import { Hero, HeroBody, Columns, Column, Content } from "bloomer";

class Cast extends Component {
  render() {
    let postNode = this.props.postEdges.markdownRemark;
    return (
      <Hero>
        <HeroBody>
          <Columns isMobile>
            <Column isSize={{mobile:8, tablet:6}} isOffset={{mobile:2, tablet:3}}>
              <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </Column>
          </Columns>
        </HeroBody>
      </Hero>
    );
  }
}

export default Cast;
