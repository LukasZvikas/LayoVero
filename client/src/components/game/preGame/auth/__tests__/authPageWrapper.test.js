import React from "react";
import { mount } from "enzyme";
import AuthPageWrapper from "../authPageWrapper";
import MainPageWrapper from "../../../MainPageWrapper";
import { GameButton, GameInput } from "../../../customComps";
import Root from "../../../../../root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

describe("authPageWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Router>
          <AuthPageWrapper />
        </Router>
      </Root>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("has three GameButtons", () => {
    expect(wrapper.find(GameButton)).toHaveLength(3);
  });

  it("has two divs", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("has 1 span", () => {
    expect(wrapper.find("span")).toHaveLength(1);
  });
});
