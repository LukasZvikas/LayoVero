import React, { Component } from "react";
import aboutUsWrapper from "./aboutUs/aboutUsWrapper";
import BlogWrapper from "./blog/BlogWrapper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/about" component={aboutUsWrapper} />
              <Route path="/blog" component={BlogWrapper} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
