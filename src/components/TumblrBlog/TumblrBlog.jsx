import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, CardContent, Title, Subtitle, Content } from "bloomer";
const _ = require("lodash");

class TumblrBlog extends Component {
  render() {
      const updates = []
      this.props.postEdges.forEach(postEdge => {
        let options = { weekday: 'long', month: 'long', day: 'numeric' };
        let counter=0;
        if (_.findIndex(postEdge.node.tags, "website") && counter <= 3) {
            counter++;
            updates.push({
                title: postEdge.node.title,
                date: new Date(postEdge.node.date).toLocaleDateString("en",options),
                body: postEdge.node.body,
                id: postEdge.node.id
            });
        }
      });
    return (
    <Card>
        <CardHeader>
            <CardHeaderTitle>Updates</CardHeaderTitle>
        </CardHeader>
        {updates.map(update => (
            <CardContent key={update.id}>
                <Title>{update.title}</Title>
                <Subtitle>{update.date}</Subtitle>
                <div className="content" dangerouslySetInnerHTML={{ __html: update.body }} />
            </CardContent>
        ))}
      </Card>
    );
  }
}

export default TumblrBlog;