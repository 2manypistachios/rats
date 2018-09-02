import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, CardContent, Title, Subtitle } from "bloomer";
import { Link } from "gatsby";
const _ = require("lodash");

class TumblrBlog extends Component {
  render() {
      const updates = []
      this.props.postEdges.forEach(postEdge => {
        console.log(postEdge);
        let options = { weekday: 'long', month: 'long', day: 'numeric' };
        let counter=0;
        if (_.includes(postEdge.node.tags, "nau")>0 && counter <= 3) {
            counter++;
            updates.push({
                title: postEdge.node.title,
                date: new Date(postEdge.node.date).toLocaleDateString("en",options),
                body: postEdge.node.body,
                id: postEdge.node.id,
                post_url: postEdge.node.post_url
            });
        }
        console.log("updates", updates);
      });

    return (
    <Card>
        <CardHeader>
            <CardHeaderTitle>Updates</CardHeaderTitle>
        </CardHeader>
        {updates.map(update => (
            <CardContent key={update.id}>
                <Title isSize="3">{update.title}</Title>
                <Subtitle>{update.date}</Subtitle>
                <div className="content" dangerouslySetInnerHTML={{ __html: update.body }} />
                <a href={update.post_url}><p>See in tumblr.</p></a>
            </CardContent>
        ))}
      </Card>
    );
  }
}

export default TumblrBlog;