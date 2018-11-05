import React from "react";
import { shallow } from "enzyme";
import AuthButton from "../authButton";

describe("authButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AuthButton />);
  });

  it("has a button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});
