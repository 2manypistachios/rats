import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";
import {Level, LevelItem, Button, Icon} from "bloomer";

class UserInfo extends Component {
  render() {
    const { tumblrUrl, twitterUrl, discordUrl } = this.props.config;
    return (
      <Level>
        <LevelItem>
          <a className="button is-info" href={tumblrUrl}>
            <span className="icon">
              <i className="fab fa-tumblr"></i>
            </span>
            <span>Tumblr</span>
          </a>
        </LevelItem>
        <LevelItem>
          <a className="button is-primary" href={twitterUrl}>
            <span className="icon">
              <i className="fab fa-twitter"></i>
            </span>
            <span>Twitter</span>
          </a>
        </LevelItem>
        <LevelItem>
          <a className="button is-info" href={discordUrl}>
            <span className="icon">
              <i className="fab fa-discord"></i>
            </span>
            <span>Discord</span>
          </a>
        </LevelItem>
      </Level>
    );
  }
}

export default UserInfo;
