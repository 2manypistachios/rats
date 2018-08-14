import React, { Component } from "react";
import {Level, LevelItem, Container } from "bloomer";

class UserInfo extends Component {
  render() {
    const { tumblrUrl, twitterUrl, discordUrl } = this.props.config;
    return (
      <div>
        <Level isHidden={"mobile"}>
          <LevelItem>
            <a className="button is-dark" href={tumblrUrl}>
              <span className="icon">
                <i className="fab fa-tumblr"></i>
              </span>
              <span>Tumblr</span>
            </a>
          </LevelItem>
          <LevelItem>
            <a className="button is-dark" href={twitterUrl}>
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </a>
          </LevelItem>
          <LevelItem>
            <a className="button is-dark" href={discordUrl}>
              <span className="icon">
                <i className="fab fa-discord"></i>
              </span>
              <span>Discord</span>
            </a>
          </LevelItem>
        </Level>

        <Level isHidden={"tablet"} isMobile>
          <LevelItem>
            <a className="button is-dark" href={tumblrUrl}>
              <span className="icon">
                <i className="fab fa-tumblr"></i>
              </span>
            </a>
          </LevelItem>
          <LevelItem>
            <a className="button is-dark" href={twitterUrl}>
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </LevelItem>
          <LevelItem>
            <a className="button is-dark" href={discordUrl}>
              <span className="icon">
                <i className="fab fa-discord"></i>
              </span>
            </a>
          </LevelItem>
        </Level>
      </div>
    );
  }
}

export default UserInfo;
