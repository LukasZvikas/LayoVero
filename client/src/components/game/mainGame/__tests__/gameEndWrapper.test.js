import React from "react";
import { GameEndWrapper } from "../gameEndWrapper";
import { GameButton } from "../../customComps";
import { shallow } from "enzyme";

describe("GameEndWrapper", () => {
  let wrapper;
  let context;
  beforeEach(() => {
    context = {
      props: { game: { resultCount: 1 }, resetGame: jest.fn() }
    };
    const outer = shallow(<GameEndWrapper />);
    const Children = outer.props().children(context);
    wrapper = shallow(Children);
  });

  it("has 3 divs", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });

  it("renders a correct resultCount", () => {
    expect(
      wrapper
        .find("div")
        .at(2)
        .props().children[2]
    ).toBe(1);
  });

  it("has 1 GameButton", () => {
    expect(wrapper.find(GameButton)).toHaveLength(1);
  });
});
