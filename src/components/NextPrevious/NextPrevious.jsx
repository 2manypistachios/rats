import React from "react";
import { Link } from "gatsby";
import {Container, Level, LevelItem, Button} from "bloomer";

class NextPrevious extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (event.keyCode =="37") {
      const {  prevSlug } = this.props.postNode.fields;
      window.location = prevSlug;
    } else if (event.keyCode == "39") {
      const {  nextSlug } = this.props.postNode.fields;
      window.location = nextSlug;
    }
  }

  render() {
    const { prevTitle, prevSlug, nextTitle, nextSlug } = this.props.postNode.fields;
    return (
        <Container className='index-comic'>
          <Level isMobile>
            <LevelItem>
              <Link to={prevSlug} key={prevTitle}><Button isColor='black' isSize='medium' isOutlined>Back</Button></Link>
            </LevelItem>
            <LevelItem>
              <Link to="/" key="home"><Button isColor='black' isSize='medium' isOutlined>Home</Button></Link>
            </LevelItem>
            <LevelItem>
              <Link to={nextSlug} key={nextTitle}><Button isColor='black' isSize='medium' isOutlined>Next</Button></Link>
            </LevelItem>
          </Level>
        </Container>
    );
  }
}

export default NextPrevious;
