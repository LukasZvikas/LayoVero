import React, { Component } from "react";
import aboutUsWrapper from "./aboutUs/aboutUsWrapper";
import BlogWrapper from "./blog/BlogWrapper";
import BlogPost from "./blog/BlogPost";
import AfterAuthWrapper from "./index/afterAuth/AfterAuthWrapper";
import PreGameWrapper from "./game/preGame/preGameWrapper";
import AuthPageWrapper from "./game/preGame/auth/authPageWrapper";
import PlanPageWrapper from "./game/preGame/plan/planPageWrapper";
import MainGameWrapper from "./game/mainGame/MainGameWrapper";
import RefSignup from "./game/referral/RefSignup";
import ReferralWrapper from "./game/referral/referralWrapper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
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
              {/*              <Route path="/about" component={aboutUsWrapper} />
              <Route path="/blog/post/*" component={BlogPost} />
              <Route path="/blog" component={BlogWrapper} />
              <Route path="/signup" component={SignUp} />
              <Route path="/reset/:token" component={ResetPassword} />*/}
              <Route exact path="/" component={PreGameWrapper} />
              <div className="game-info">
                <Route exact path="/ready" component={AuthPageWrapper} />
                <Route exact path="/plan" component={PlanPageWrapper} />
                <Route exact path="/invites" component={ReferralWrapper} />
                <Route exact path="/round/:token" component={MainGameWrapper} />
                <Route exact path="/referrals/:id" component={RefSignup} />
              </div>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
