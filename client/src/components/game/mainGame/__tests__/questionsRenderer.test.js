import React from "react";
import QuestionsRenderer from "../questionsRenderer";
import Question from "../question";
import { shallow } from "enzyme";
import { getQArray } from "./testHelpers";

describe("QuestionsRenderer", () => {
  let wrapper;
  let context;
  beforeEach(() => {
    context = {
      state: {
        answered: false,
        choice: ""
      },
      props: {
        game: {
          questCount: 0,
          resultCount: 0,
          questions: getQArray()
        }
      },
      actions: { checkIfAnswered: jest.fn() }
    };
    const outer = shallow(<QuestionsRenderer />);
    const Children = outer.props().children(context);
    wrapper = shallow(Children);
  });

  it("has 4 Questions", () => {
    expect(wrapper.find("Question")).toHaveLength(4);
  });
  it("has 1 div", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
