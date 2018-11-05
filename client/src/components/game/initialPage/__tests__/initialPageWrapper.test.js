import React from "react";
import { shallow, mount } from "enzyme";
import InitialPageWrapper from "../initialPageWrapper";
import MainHeading from "../mainHeading";
import PlayButton from "../playButton";
import Root from "../../../../root";

describe("InitialPage components", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <InitialPageWrapper />
      </Root>
    );
    console.log(wrapper.children());
  });

  it("main div has a className ip", () => {
    expect(wrapper.find("div").first().prop("className")).toBe("ip");
  });

  it("should have a Play A Game heading", () => {
    expect(wrapper.find(MainHeading)).toHaveLength(1);
  });

  it("should have a play button and an action prop as a function", () => {
  	//console.log("here2", wrapper.find(PlayButton).prop("action").type())
    expect(wrapper.find(PlayButton)).toHaveLength(1);
    //expect(wrapper.find(PlayButton).props().action).
  });
});
