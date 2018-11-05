import React from "react";
import { shallow } from "enzyme";
import InitialPageWrapper from "../initialPageWrapper";
import MainHeading from "../mainHeading";
import PlayButton from "../playButton";

describe("InitialPage components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InitialPageWrapper />);
  });

  it("should have a Play A Game heading", () => {
    expect(wrapper.find(MainHeading)).toHaveLength(1);
  });

  it("should have a play button", () => {
    expect(wrapper.find(PlayButton)).toHaveLength(1);
  });
});
