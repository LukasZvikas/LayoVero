import React from "react";
import Question from "../question";
import { shallow } from "enzyme";
import { isChosen, answerStyle } from "../functions";
import sacreCoeur from "../../../../../images/sacreCoeur.png";

const getProps = (isAnswered, isCorrect) => {
  return {
    choice: "London",
    image: "london",
    isAnswered: isAnswered,
    isCorrect: isCorrect,
    onClick: jest.fn(),
    title: "London"
  };
};

describe("Question interactions", () => {
  let wrapper;
  let props;
  let chosen;

  describe("Correct", () => {
    props = getProps(true, true);
    beforeEach(() => {
      wrapper = shallow(<Question {...props} />);
    });

    it("has 5 divs", () => {
      expect(wrapper.find("div")).toHaveLength(5);
    });

    it("has 1 img", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });

    it("has a correct title", () => {
      expect(
        wrapper
          .find("div")
          .at(3)
          .props().children
      ).toBe("London");
    });

    it("has a correct image", () => {
      expect(wrapper.find("img").prop("src")).toBe(sacreCoeur);
    });

    it("div at position 3 has an onClick with an onClick function from props", () => {
      expect(
        wrapper
          .find("div")
          .at(2)
          .prop("onClick")
      ).toBe(props.onClick);
      //expect(wrapper.find("div").at(2).prop("onClick"))
    });

    it("if choice and title match, div at position 1 has a chosen class ", () => {
      expect(
        wrapper
          .find("div")
          .at(1)
          .prop("className")
      ).toBe("chosen");
    });

    it("if choice and title match, div at position 4 has a correct class and div content is CORRECT ", () => {
      expect(
        wrapper
          .find("div")
          .at(4)
          .prop("className")
      ).toBe("game-info__answer correct");
      expect(
        wrapper
          .find("div")
          .at(4)
          .props().children
      ).toBe("CORRECT!");
    });
  });

  describe("Incorrect", () => {
    beforeEach(() => {
      props = getProps(true, false);

      wrapper = shallow(<Question {...props} />);
    });

    it("if choice and title don't match, div at position 4 has a incorrect class and div content is INCORRECT", () => {
      expect(
        wrapper
          .find("div")
          .at(4)
          .prop("className")
      ).toBe("game-info__answer incorrect");
      expect(
        wrapper
          .find("div")
          .at(4)
          .props().children
      ).toBe("INCORRECT!");
    });
  });
});
