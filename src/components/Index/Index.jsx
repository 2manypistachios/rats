import React, { Component } from "react";
import { Hero, HeroBody, Container, Column, Columns, Level, LevelItem, Image } from "bloomer";
import NextLatest from "../../components/NextLatest/NextLatest";
import "./Index.css";

class Index extends Component {
  render() {
    const postEdges = this.props.postEdges;
    return (
      <Hero isSize='is-medium' className='index-section'>
          <HeroBody hasTextAlign='centered'>
          <Container className="index">
            <Columns isCentered>
              <Column isSize={{tablet: 4}}>
                  <Image className='has-image-centered' src='/logos/totslogo.svg' className={{color:"white"}}/>
              </Column>
            </Columns>
            <Level>
              <LevelItem>
                <Image className='has-image-centered' src='/images/glitchComic.gif'/>
              </LevelItem>
            </Level>
          </Container>
            <br/>
            <NextLatest postEdges={postEdges} />
          </HeroBody>
        </Hero>
      
    );
  }
}

export default Index;