import React from "react";
import { shallow } from "enzyme";
import PlayButton from "../playButton";

describe("PlayButton", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = { action: jest.fn() };
    wrapper = shallow(<PlayButton {...props} />);
  });

  it("calls and action", () => {
  	console.log( wrapper.find("button").props())
    wrapper.find("button").prop("onClick")();
    expect(props.action).toHaveBeenCalledTimes(1);
  });
});
