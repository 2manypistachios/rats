import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <section className="section about">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </section>
      </Layout>
    );
  }
}

export default AboutPage;
