import React from "react";
import QuestionCount from "../questionCount";
import QuestionsWrapper from "../questionsWrapper";
import QuestionsRenderer from "../questionsRenderer";
import ButtonRenderer from "../buttonRenderer";
import { Heading } from "../../customComps";
import { shallow, mount } from "enzyme";
import { getRoundQuestions, renderButtonType } from "../functions";
import { getQArray } from "./testHelpers";

describe("QuestionsWrapper", () => {
  let context;
  let wrapper;

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

    const outer = shallow(<QuestionsWrapper />);
    const Children = outer.props().children(context);
    wrapper = shallow(Children);
  });

  it("has one QuestionCount component", () => {
    expect(wrapper.find(QuestionCount)).toHaveLength(1);
  });
  it("has one Heading component", () => {
    expect(wrapper.find(Heading)).toHaveLength(1);
  });
  it("heading primaryText prop is correct", () => {
    expect(wrapper.find(Heading).prop("primaryText")).toBe(
      "Which building was supposed to be"
    );
  });
  it("heading secondaryText prop is correct", () => {
    expect(wrapper.find(Heading).prop("secondaryText")).toBe("temporary");
  });
  it("heading tertiaryText prop is correct", () => {
    expect(wrapper.find(Heading).prop("tertiaryText")).toBe("?");
  });
  it("has one QuestionsRenderer component", () => {
    expect(wrapper.find(QuestionsRenderer)).toHaveLength(1);
  });
  it("has one ButtonRenderer component", () => {
    expect(wrapper.find(ButtonRenderer)).toHaveLength(1);
  });
  it("has 3 divs", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });
});
