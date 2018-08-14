import React, { Component } from "react";
import chicago from "../../../../images/chicago.jpg";
import london from "../../../../images/IMG_6450.jpg";
import bali from "../../../../images/bali_regular.jpg";

class PlacesContainer extends Component {
  render() {
    return (
      <div className="popular-places">
        <div className="popular-places__heading">Popular Layovers</div>
        <div className="popular-places__wrapper">
          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${bali})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">Bali</div>
              <div className="popular-places__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                maximus semper laoreet.
              </div>
            </div>
          </div>

          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${london})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">London</div>
              <div className="popular-places__description">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                maximus semper laoreet.
              </div>
            </div>
          </div>

          <div className="popular-places__container">
            <div
              className="popular-places__photo-box"
              style={{ backgroundImage: `url(${chicago})` }}
            />
            <div className="popular-places__text-box">
              <div className="popular-places__city">Chicago</div>
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

export default PlacesContainer;
