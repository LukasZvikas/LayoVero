import MainGameWrapper from "../MainGameWrapper";
import * as functions from "../functions";
import { localStorageMock } from "./lsMock";
import Question from "../question";

window.localStorage = localStorageMock;

const getQArray = () => {
  return {
    answers: [
      { title: "Moulin Rouge", image: "moulinRouge", status: true },
      { title: "The Louvre", image: "louvre", status: true },
      { title: "The Eiffel Tower", image: "eiffelTower", status: true },
      { title: "Arc de Triomphe", image: "arcDeTriomphe", status: true }
    ]
  };
};

describe("MainGameWrapper functions", () => {
  describe("renderButtonType", () => {
    let actions;
    let state;
    beforeEach(() => {
      actions = {
        questionsFromReq: jest.fn(),
        setResultState: jest.fn(),
        changeToAnswered: jest.fn(),
        incrementCount: jest.fn()
      };
      state = {
        questCount: 2,
        choice: "",
        questionsFromLS: getQArray()
      };
    });
    ///Will need to change
    it("returns arrow if answered is true", () => {
      const answeredTrue = Object.assign({ answered: true }, state);
      const result = functions.renderButtonType(
        answeredTrue,
        actions.questionsFromReq,
        actions.setResultState,
        actions.changeToAnswered,
        actions.incrementCount
      );
      expect(result.props.name).toBe("Next question");
    });

    it("returns check answer button is answered is false", () => {
      const answeredFalse = Object.assign({ answered: false }, state);
      const result = functions.renderButtonType(
        answeredFalse,
        actions.questionsFromReq,
        actions.setResultState,
        actions.changeToAnswered,
        actions.incrementCount
      );
      expect(result.props.name).toBe("Check answer");
    });
  });

  describe("isCorrect", () => {
    it("returns true if names match", () => {
      let result = functions.isCorrect("Eiffel Tower", "Eiffel Tower");
      expect(result).toBe(true);
    });
    it("returns true if names don't match", () => {
      let result = functions.isCorrect("Eiffel Tower", "Russia");
      expect(result).toBe(false);
    });
  });

  describe("buttonStateCheck works correctly", () => {
    it("returns true if state is empty", () => {
      let result = functions.buttonStateCheck("");
      expect(result).toBe(true);
    });
    it("returns true if names don't match", () => {
      let result = functions.buttonStateCheck("Eiffel Tower");
      expect(result).toBe(false);
    });
  });

  describe("incrementLSCount", () => {
    it("if a key does not exist localStorage with that key should be 1", () => {
      functions.incrementLSCount("questCount");
      const questCount = localStorage.getItem("questCount");
      expect(questCount).toBe("1");
    });
    it("if a key does exist localStorage with that key, it should increment it", () => {
      localStorage.setItem("questCount", 1);
      functions.incrementLSCount("questCount");
      const questCount = localStorage.getItem("questCount");
      expect(questCount).toBe("2");
    });
  });

  describe("getInitialQuestions if there are no questions", () => {
    let actions;
    beforeEach(() => {
      actions = {
        action: jest.fn(),
        setQState: jest.fn(),
        incrementLSCount: jest.fn()
      };
      functions.getInitialQuestions(
        actions.action,
        actions.setQState,
        actions.incrementLSCount
      );
    });
    it("it calls a function and sets all localStorage counters to 0", () => {
      const questCount = localStorage.getItem("questCount");
      const resultCount = localStorage.getItem("resultCount");
      const questCountHelp = localStorage.getItem("questCountHelp");
      expect(actions.action).toHaveBeenCalledTimes(1);
      expect(questCount).toBe("0");
      expect(resultCount).toBe("0");
      expect(questCountHelp).toBe("0");
    });
  });
  describe("getInitialQuestions if there are questions", () => {
    let actions;
    beforeEach(() => {
      actions = {
        action: jest.fn(),
        setQState: jest.fn(),
        incrementLSCount: jest.fn()
      };

      let question = {
        round: 1,
        question: "Which building was supposed to be temporary?",
        correct_answer: "The Eiffel Tower"
      };

      localStorage.setItem("questions", JSON.stringify(question));
    });

    it("if there are questions and questCount === questCountHelp", () => {
      functions.getInitialQuestions(
        actions.action,
        actions.setQState,
        actions.incrementLSCount
      );
      expect(actions.setQState).toHaveBeenCalledTimes(1);
    });
    it("it calls incrementLSCount", () => {
      localStorage.setItem("questCount", 1);
      localStorage.setItem("questCountHelp", 2);
      functions.getInitialQuestions(
        actions.action,
        actions.setQState,
        actions.incrementLSCount
      );
      expect(actions.incrementLSCount).toHaveBeenCalledTimes(1);
    });
  });

  describe("renderQuestions", () => {
    it("has 4 questions rendered", () => {
      let questionArr = getQArray();
      let state = { answered: false, choice: "" };
      let actions = { isCorrect: jest.fn(), ifAnswered: jest.fn() };

      const result = functions.renderQuestions(
        questionArr,
        "The Eiffel Tower",
        state,
        functions.isCorrect,
        functions.ifAnswered
      );
      expect(result.length).toBe(4);
    });
  });

  describe("answerScoreHandler", () => {
    let actions;
    beforeEach(() => {
      actions = {
        setResultState: jest.fn(),
        incrementLSCount: jest.fn()
      };
    });
    it("calls setState once and incrementLSCount twice, if true parameter is provided", () => {
      const result = functions.answerScoreHandler(
        true,
        actions.setResultState,
        actions.incrementLSCount
      );
      expect(actions.setResultState).toHaveBeenCalledTimes(1);
      expect(actions.incrementLSCount).toHaveBeenCalledTimes(2);
    });
    it("calls incrementLSCount twice, if false parameter is provided", () => {
      const result = functions.answerScoreHandler(
        false,
        actions.setResultState,
        actions.incrementLSCount
      );
      expect(actions.incrementLSCount).toHaveBeenCalledTimes(1);
    });
  });

  describe("getQuestTitle", () => {
    it("getCountNumber gets called once", () => {
      let actions = {
        getCountNumber: jest.fn(() => 0)
      };
      let questionArr = [
        {
          primaryText: "Which building was supposed to be",
          specialWord: "temporary"
        }
      ];
      let result = functions.getQuestTitle(questionArr, actions.getCountNumber);
      expect(actions.getCountNumber).toHaveBeenCalledTimes(1);
      expect(result).toEqual({
        primary: "Which building was supposed to be",
        special: "temporary"
      });
    });
  });

  describe("getCountNumber", () => {
    let questCount;
    beforeEach(() => {
      questCount = 2;
    });
    it("if questCount !== storage && storage !== null, return count from localStorage", () => {
      localStorage.setItem("questCount", 1);
      let result = functions.getCountNumber("questCount", questCount);
      expect(result).toBe("1");
    });
    it("if questCount !== storage && storage !== null is not true, return count from localStorage", () => {
      localStorage.removeItem("questCount");
      let result = functions.getCountNumber("questCount", questCount);
      expect(result).toBe(2);
    });
  });

  describe("checkIfCorrect", () => {
    let actions;
    let dataFromReq;
    let dataFromLS;
    let questCount;
    beforeEach(() => {
      actions = { getCountNumber: jest.fn(() => 1) };

      dataFromLS = [
        {
          correct_answer: "The Eiffel Tower"
        },
        {
          correct_answer: "Russia"
        }
      ];
    });
    it("if choice matches the correct answer, return true", () => {
      let choice = "Russia";
      let questCount = 1;
      let result = functions.checkIfCorrect(
        choice,
        dataFromLS,
        dataFromReq,
        actions.getCountNumber,
        questCount
      );
      expect(result).toEqual(true);
    });
    it("if choice matches the correct answer, return false", () => {
      let choice = "The Eiffel Tower";
      let questCount = 1;
      let result = functions.checkIfCorrect(
        choice,
        dataFromLS,
        dataFromReq,
        actions.getCountNumber,
        questCount
      );
      expect(result).toEqual(false);
    });
  });

  describe("incrementLSQuestCount", () => {
    it("increments questCount and returns it", () => {
      localStorage.setItem("questCount", 1);
      let result = functions.incrementLSQuestCount();

      expect(result).toBe(2);
    });
  });
});
