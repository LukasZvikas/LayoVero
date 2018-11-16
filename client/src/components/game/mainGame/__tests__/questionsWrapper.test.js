import React from "react";
import QuestionCount from "../questionsWrapper";
import QuestionsWrapper from "../questionsWrapper";
import { Heading, GameButton } from "../../customComps";
import { shallow, mount } from "enzyme";
import { getRoundQuestions, renderButtonType } from "../functions";

describe("QuestionsWrapper", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      LSQcount: "7",
      getRoundQuestions: jest.fn(),
      incrementLSQCount: jest.fn(),
      renderButtonType: jest.fn(() => GameButton),
      state: {
        questionsFromLS: [
          { correct_answer: "The Eiffel Tower" },
          { correct_answer: "Russia" }
        ],
        questCount: 0,
        choice: "",
        answered: false,
        resultCount: 0
      },
      titleItems: {
        primary: "Which city has the highest concentration of in the world",
        secondary: "Art Deco buildings"
      }
    };

    wrapper = mount(<QuestionsWrapper {...props} />);
  });

  it("has one QuestionCount component", () => {
    expect(wrapper.find(QuestionCount)).toHaveLength(1);
  });
  it("has one Heading component", () => {
  
    expect(wrapper.find(Heading)).toHaveLength(1);
  });
});
