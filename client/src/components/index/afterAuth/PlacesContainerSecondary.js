import React, { Component } from "react";
import amsterdam from "../../../../images/amsterdam.jpg";
import berlin from "../../../../images/berlin.jpg";
import nyc from "../../../../images/nyc.jpg";

class PlacesContainerSecondary extends Component {
  render() {
    return (
      <div className="popular-places">
        <div className="popular-places__heading">New Layovers</div>
        <div className="popular-places__wrapper">
          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${nyc})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">New York</div>
              <div className="popular-places__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                maximus semper laoreet.
              </div>
            </div>
          </div>

          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${amsterdam})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">Amsterdam</div>
              <div className="popular-places__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                maximus semper laoreet.
              </div>
            </div>
          </div>

          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${berlin})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">Berlin</div>
              <div className="popular-places__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                maximus semper laoreet.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlacesContainerSecondary;
