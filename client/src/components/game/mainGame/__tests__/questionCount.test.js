import React from "react";
import QuestionCount from "../questionCount";
import { shallow } from "enzyme";

describe("QuestionCount", () => {
  let props;
  let wrapper;
  describe("if LSQcount exists", () => {
    beforeEach(() => {
      props = {
        LSQcount: 1,
        action: jest.fn(),
        stateQCount: 1
      };
      wrapper = shallow(<QuestionCount {...props} />);
    });
    it("has 1 div", () => {
      expect(wrapper.find("div")).toHaveLength(1);
    });

    it("action gets called once if LSQcount exists", () => {
      expect(props.action).toHaveBeenCalledTimes(1);
    });
  });

  describe("if LSQcount does not exist", () => {
    beforeEach(() => {
      props = {
        LSQcount: undefined,
        action: jest.fn(),
        stateQCount: 0
      };
      wrapper = shallow(<QuestionCount {...props} />);
    });
    it("stateQCount gets incremented by 1", () => {
      expect(wrapper.find("div").props().children[1]).toBe(1);
    });
    it("action does not get called", () => {
      expect(props.action).toHaveBeenCalledTimes(0);
    });
  });
});
