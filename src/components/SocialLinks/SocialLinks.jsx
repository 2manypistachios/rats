import React, { Component } from "react";
import {
  TumblrShareButton,
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
  
  TumblrShareCount,
  FacebookShareCount,
  GooglePlusShareCount,
  RedditShareCount,
  
  TumblrIcon,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <div className="social-links">
        <TumblrShareButton url={url} title={post.title}>
          <TumblrIcon round size={iconSize} />
          <TumblrShareCount url={url}>
            {count => renderShareCount(count)}
          </TumblrShareCount>
        </TumblrShareButton>

        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
        
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => renderShareCount(count)}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        
        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => renderShareCount(count)}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    );
  }
}

export default SocialLinks;
