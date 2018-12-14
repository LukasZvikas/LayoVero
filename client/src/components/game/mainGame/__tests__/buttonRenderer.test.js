import React from "react";
import ButtonRenderer from "../buttonRenderer";
import { GameButton } from "../../customComps";
import { shallow, mount } from "enzyme";
import {
  answerScoreHandler,
  buttonStateCheck,
  checkIfCorrect
} from "../functions";
import { getQArray } from "./testHelpers";

describe("GameEndWrapper", () => {
  let wrapper;
  let context = {
    state: {
      answered: false,
      choice: ""
    },
    props: {
      game: {
        questCount: 0,
        resultCount: 0,
        questions: getQArray()
      },
      correctAnswerAction: jest.fn(),
      incorrectAnswerAction: jest.fn(),
      incrementCount: jest.fn()
    },
    actions: { changeToAnswered: jest.fn(), resetChoice: jest.fn() }
  };

  describe("if answered is false", () => {
    beforeEach(() => {
      const outer = shallow(<ButtonRenderer />);
      const Children = outer.props().children(context);
      wrapper = mount(Children);
    });
    it("has a GameButton", () => {
      expect(wrapper.find(GameButton)).toHaveLength(1);
    });
    it("name is equal to Check answer", () => {
      expect(wrapper.find(GameButton).prop("name")).toBe("Check answer");
    });
    it("button is disabled", () => {
      expect(wrapper.find(GameButton).prop("isDisabled")).toBe(true);
    });
  });
  describe("if answered is true", () => {
    let newContext = {
      ...context,
      state: { answered: true, choice: "The Louvre" }
    };
    beforeEach(() => {
      const outer = shallow(<ButtonRenderer />);
      const Children = outer.props().children(newContext);
      wrapper = mount(Children);
    });
    it("has a GameButton", () => {
      expect(wrapper.find(GameButton)).toHaveLength(1);
    });
    it("name is equal to Next question", () => {
      expect(wrapper.find(GameButton).prop("name")).toBe("Next question");
    });
    it("button is not disabled", () => {
      expect(wrapper.find(GameButton).prop("isDisabled")).toBe(false);
    });
  });
});
