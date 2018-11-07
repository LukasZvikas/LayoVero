import React from "react";
import { shallow } from "enzyme";
import PlanPageWrapper from "../planPageWrapper";
import { GameButton, GameInput, Heading, ImageBox } from "../../../customComps";

describe("PlanPageWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PlanPageWrapper />);
  });

  it("has 3 divs", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });

  it("has a Heading", () => {
    expect(wrapper.find(Heading)).toHaveLength(1);
  });

  it("has a GameButton", () => {
    expect(wrapper.find(GameButton)).toHaveLength(1);
  });

  it("has 4 ImageBoxes", () => {
    expect(wrapper.find(ImageBox)).toHaveLength(4);
  });
});
