import React from "react";
import { shallow, mount } from "enzyme";
import InitialPageWrapper from "../initialPageWrapper";
import MainHeading from "../mainHeading";
import { GameButton } from "../../../customComps";
import Root from "../../../../../root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

describe("InitialPage components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <InitialPageWrapper />
        </Router>
      </Root>
    );
  });

  it("main div has a className pre", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .prop("className")
    ).toBe("game-info__main-wrap pre");
  });

  it("should have a Play A Game heading", () => {
    expect(wrapper.find(MainHeading)).toHaveLength(1);
  });

  it("should have a play button and an action prop as a function", () => {
    //console.log("here2", wrapper.find(PlayButton).prop("action").type())
    expect(wrapper.find(GameButton)).toHaveLength(1);
    //expect(wrapper.find(PlayButton).props().action).
  });
});
