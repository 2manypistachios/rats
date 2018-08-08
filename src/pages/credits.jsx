import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class CreditsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
      </Layout>
    );
  }
}

export default CreditsPage;
