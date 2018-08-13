import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Layout from "../layout";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import config from "../../data/SiteConfig";
const _ = require("lodash");

import { Section, Notification, Columns, Column, Title,  Level, LevelItem, Button, Progress } from "bloomer";

class LostPage extends Component {
  constructor(props) {
    super(props);
    const message = [
      "Give up.",
      "No seriously, give up.",
      "Stop it!",
      "Dude, what the hecki?",
      "Seriously, dude, what is wrong with you?!",
      "You don't want to know what happens when the progress bar hits 100!!!!!",
      "Hah, tricked you."
    ]
    const style = {};
    this.state = {giveup: 1, message: message, style: style};
    this.onClickGiveup = this.onClickGiveup.bind(this);
  }

  onClickGiveup() {
    if (this.state.giveup == this.state.message.length-1) {
      window.location = '/';
    }

    let style_string="";
    for (let x=0; x<4; x++) {
      style_string+=_.random(0,800)+"px ";
    }
    console.log(style_string);
    let style = {"margin":style_string};
    this.setState(prevState => ({
      giveup: prevState.giveup+1,
      style: style
    }));
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title={`404 | ${config.siteTitle}`} />
        <ErrorBoundary>
          <Section>
            <Columns isMobile isCentered isVCentered>
              <Column isSize={6}>
                <Notification isColor="dark" hasTextAlign="centered">
                  <p>You are lost. In life. In relationships. In destiny.</p>
                  <p>But more importantly in this website.</p>
                  <br/>
                  <Level>
                    <LevelItem>
                      <Button href="/">Go Back.</Button>
                    </LevelItem>
                  </Level>
                  <Progress isSize='medium' isColor='light' value={this.state.giveup} max={this.state.message.length} />
                  <Button isColor='danger' onClick={this.onClickGiveup} style={this.state.style}>{this.state.message[this.state.giveup-1]}</Button>
                </Notification>
              </Column>
            </Columns>
          </Section>
        </ErrorBoundary>
      </Layout>
    );
  }
}

export default LostPage;