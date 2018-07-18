import React, { Component } from "react";
import aboutUsWrapper from "./aboutUs/aboutUsWrapper";
import BlogWrapper from "./blog/BlogWrapper";
import BlogPost from "./blog/BlogPost";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./authentication/SignUp";

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/about" component={aboutUsWrapper} />
              <Route path="/blog/post/*" component={BlogPost} />
              <Route path="/blog" component={BlogWrapper} />
              <Route path="/signup" component={SignUp} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
