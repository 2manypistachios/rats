import React, { Component } from "react";
import { Container, Column, Columns, Level, LevelItem, Image } from "bloomer";
import "./Index.css";

class Index extends Component {
  render() {
    return (
      <Container className="index">
        <Columns>
          <Column isSize={{tablet: 4}} isOffset={{tablet: 4}}>
              <Image className='has-image-centered' src='/images/glitchLogo.png'/>
          </Column>
        </Columns>
        <Level>
          <LevelItem>
            <Image className='has-image-centered' src='/images/glitchComic.gif'/>
          </LevelItem>
        </Level>
      </Container>
    );
  }
}

export default Index;