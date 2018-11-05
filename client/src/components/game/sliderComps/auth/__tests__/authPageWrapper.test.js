import React from "react";
import { mount } from "enzyme";
import AuthPageWrapper from "../authPageWrapper";
import AuthButton from "../authButton";

describe("authPageWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AuthPageWrapper />);
  });

  it("has two AuthButtons", () => {
    expect(wrapper.find(AuthButton)).toHaveLength(3);
  });

  it("has two divs", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("has 1 span", () => {
    expect(wrapper.find("span")).toHaveLength(1);
  });
});
