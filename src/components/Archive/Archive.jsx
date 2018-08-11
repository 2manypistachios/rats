import React, { Component } from "react";
import "./Archive.css";

import { Hero, HeroBody, Columns, Column, Content } from "bloomer";

class Archive extends Component {
  render() {
    let postNode = this.props.postEdges;
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

export default Archive;
