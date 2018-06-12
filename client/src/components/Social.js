import React, { Component } from "react";
import { connect } from "react-redux";
import * as socialActions from "../actions/socialActions";
import facebookIcon from "../../images/SVG/facebook.svg";
import instagramIcon from "../../images/SVG/instagram.svg";
import youtubeIcon from "../../images/SVG/youtube.svg";

class ConnectWithUs extends Component {
  componentDidMount() {
    return this.props.instaFeed();
  }

  renderFeed(array) {
    return array.slice(0, 6).map(item => {
      return (
        <div className="social__item-box">
          <img
            className="social__photo"
            src={item.images.standard_resolution.url}
          />
          <div className="social__photo-text">{item.location.name}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.instaData.data);
    if (this.props.instaData.data == undefined) {
      return <div className="spinner"></div>;
    }
    return (
      <div className="social">
        <div className="social__name"> @LayoVero </div>
        <div className="social__icons">
          <img className="social__icons-items" src={facebookIcon} />
          <img className="social__icons-items" src={instagramIcon} />
          <img className="social__icons-items" src={youtubeIcon} />
        </div>
        <div className="social__text-body">
          <div className="social__text-1">
            Looking for a travel inspiration?
          </div>
          <div className="social__text-2">
            We got you covered! Follow us on Instagram <b>@layoveroapp</b>
          </div>
          <div className="social__text-3">
            Our account is divided into editions to help You find destinations
            easily. So, find Your destination, save photos into categories for
            the specific destination and start planning your next trip!
          </div>
        </div>
        <div className="social__list">
          {this.renderFeed(this.props.instaData.data)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    instaData: state.social
  };
}

export default connect(mapStateToProps, socialActions)(ConnectWithUs);
