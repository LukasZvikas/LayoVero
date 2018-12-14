import React from "react";
import QuestionCount from "../questionCount";
import { shallow } from "enzyme";

describe("QuestionCount", () => {
  let wrapper;
  let context;
  beforeEach(() => {
    context = {
      props: {
        game: {
          questCount: 1,
          resultCount: 1
        }
      }
    };
    const outer = shallow(<QuestionCount />);
    const Children = outer.props().children(context);
    wrapper = shallow(Children);
  });
  it("has 3 divs", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });

  it("renders correct questCount", () => {
    expect(
      wrapper
        .find("div")
        .at(1)
        .props().children[1]
    ).toBe(2);
  });

  it("renders correct resultCount", () => {
    expect(
      wrapper
        .find("div")
        .at(2)
        .props().children[1]
    ).toBe(1);
  });
});
