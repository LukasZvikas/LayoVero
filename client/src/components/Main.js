import React, { Component } from "react";
import aboutUsWrapper from "./aboutUs/aboutUsWrapper";
import BlogWrapper from "./blog/BlogWrapper";
import BlogPost from "./blog/BlogPost";
import BeforeAuth from "./index/BeforeAuth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./authentication/SignUp";
import ResetPassword from "./authentication/resetPassword";

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
              <Route path="/reset/:token" component={ResetPassword} />
              <Route exact path="/" component={BeforeAuth} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
