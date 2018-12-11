import MainGameWrapper from "../MainGameWrapper";
import * as utils from "../functions";
import Question from "../question";

const getQArray = () => {
  return [
    {
      round: 1,
      question: "Which building was supposed to be temporary?",
      correct_answer: "The Eiffel Tower",
      explanation:
        "The Eiffel Tower. It was supposed to be a temporary installation for 1889 World Fair.",
      primaryText: "Which building was supposed to be",
      specialWord: "temporary",
      answers: [
        {
          title: "Moulin Rouge",
          image: "moulinRouge"
        },
        {
          title: "The Louvre",
          image: "louvre"
        },
        {
          title: "The Eiffel Tower",
          image: "eiffelTower"
        },
        {
          title: "Arc de Triomphe",
          image: "arcDeTriomphe"
        }
      ]
    }
  ];
};

describe("MainGameWrapper functions", () => {
  describe("isChosen", () => {
    let newProps;
    let props = {
      choice: "The Eiffel Tower",
      title: "The Eiffel Tower",
      isAnswered: true,
      isCorrect: true
    };
    it("returns chosen if title matches choice and isAnswered, isCorrect are true", () => {
      const result = utils.isChosen(props);
      expect(result).toBe("chosen");
    });
    it("returns empty string if title does not match choice but isAnswered, isCorrect are true", () => {
      newProps = { ...props, choice: "Moulin Rouge" };
      const result = utils.isChosen(newProps);
      expect(result).toBe("chosen");
    });
    it("returns empty string if title does not match choice but isCorrect is false", () => {
      newProps = { ...props, choice: "Moulin Rouge", isCorrect: false };
      const result = utils.isChosen(newProps);
      expect(result).toBe("");
    });
  });

  describe("isCorrect", () => {
    it("returns true if names match", () => {
      let result = utils.isCorrect("Eiffel Tower", "Eiffel Tower");
      expect(result).toBe(true);
    });
    it("returns true if names don't match", () => {
      let result = utils.isCorrect("Eiffel Tower", "Russia");
      expect(result).toBe(false);
    });
  });

  describe("buttonStateCheck works correctly", () => {
    it("returns true if state is empty", () => {
      let result = utils.buttonStateCheck("");
      expect(result).toBe(true);
    });
    it("returns true if names don't match", () => {
      let result = utils.buttonStateCheck("Eiffel Tower");
      expect(result).toBe(false);
    });
  });

  describe("renderQuestions", () => {
    let questions = getQArray();
    let actions = { isCorrect: jest.fn(), checkIfAnswered: jest.fn() };
    let choice = "The Eiffel Tower";
    let questCount = 0;
    let answered = true;
    it("has 4 questions rendered", () => {
      const result = utils.renderQuestions({
        questions,
        choice,
        questCount,
        actions,
        answered
      });
      expect(result.length).toBe(4);
    });
  });

  describe("getQuestTitle", () => {
    it("getCountNumber gets called once", () => {
      let questions = [
        {
          primaryText: "Which building was supposed to be",
          specialWord: "temporary"
        }
      ];
      let questCount = 0;
      let result = utils.getQuestTitle({ questions, questCount });
      expect(result).toEqual({
        primary: "Which building was supposed to be",
        special: "temporary"
      });
    });
  });

  describe("answerScoreHandler", () => {
    let isCorrect;
    let correctAction;
    let incorrectAction;
    beforeEach(() => {
      correctAction = jest.fn();
      incorrectAction = jest.fn();
    });
    it("if isCorrect is true, correctAction action is called", () => {
      isCorrect = true;
      utils.answerScoreHandler({ isCorrect, correctAction, incorrectAction });
      expect(correctAction).toHaveBeenCalledTimes(1);
    });

    it("if isCorrect is false, incorrectAction action is called", () => {
      isCorrect = false;
      utils.answerScoreHandler({ isCorrect, correctAction, incorrectAction });
      expect(incorrectAction).toHaveBeenCalledTimes(1);
    });
  });

  describe("checkIfCorrect", () => {
    let choice;
    let questCount = 0;
    let questions = getQArray();
    it("if choice matches the correct answer, return true", () => {
      let choice = "The Eiffel Tower";
      let result = utils.checkIfCorrect({
        choice,
        questions,
        questCount
      });
      expect(result).toEqual(true);
    });
    it("if choice matches the correct answer, return false", () => {
      let choice = "Moulin Rouge";
      let result = utils.checkIfCorrect({
        choice,
        questions,
        questCount
      });
      expect(result).toEqual(false);
    });
  });
});
