import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

import {Footer, Container, Content, Columns, Column, Icon} from "bloomer";

class FooterBox extends Component {
  render() {
    const {config} = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    
    return (
      <Footer id='footer'>
        <Container>
            <Content>
                <Columns>
                    <Column>
                        <p>Made with <Icon hasTextColor="danger" className="fa fa-heart"></Icon>  by <a>2ManyPistachios</a>. </p>
                        <small>Just too many.</small>
                    </Column>
                </Columns>
                <Content isSize='small'>
                    <p>The website content is licensed under <a target="_blank">{copyright}</a>.</p>
                </Content>
            </Content>
        </Container>
      </Footer>
    );
  }
}

export default FooterBox;
