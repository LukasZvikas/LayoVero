import MainGameWrapper from "../MainGameWrapper";
import * as functions from "../functions";
import { localStorageMock } from "./lsMock";
import Question from "../question";

window.localStorage = localStorageMock;

const getProps = (choice, title, answered, correct) => {
  return {
    choice: choice,
    title: title,
    isAnswered: answered,
    isCorrect: correct
  };
};

describe("Question functions", () => {
  let props;
  describe("isChosen", () => {
    describe("returns chosen", () => {
      it("if choice and title are equal returns chosen", () => {
        props = getProps("London", "London", false, false);
        const result = functions.isChosen(props);

        expect(result).toBe("chosen");
      });
      it("if isAnswered and isCorrect are returns returns chosen", () => {
        props = getProps("London", "Russia", true, true);
        const result = functions.isChosen(props);
        expect(result).toBe("chosen");
      });
    });

    describe("returns empty string", () => {
      it("if choice and title are not equal returns empty string", () => {
        props = getProps("London", "Russia", false, false);
        const result = functions.isChosen(props);
        expect(result).toBe("");
      });
      it("if choice and title do not match and isAnswered and isCorrect are false returns empty string", () => {
        props = getProps("London", "Russia", false, false);
        const result = functions.isChosen(props);
        expect(result).toBe("");
      });
    });
  });

  describe("correctChecker", () => {
    it("when isAnswered is false and is class", () => {
      props = getProps("London", "Russia", false, true);
      const result = functions.correctChecker("class", props);
      expect(result).toBe("");
    });

    it("when isAnswered is false and is text", () => {
      props = getProps("London", "Russia", false, true);
      const result = functions.correctChecker("text", props);
      expect(result).toBe("");
    });

    describe("when type is class", () => {
      it("when isCorrect and isAnswered are true and choice is equal to title", () => {
        props = getProps("London", "London", true, true);
        const result = functions.correctChecker("class", props);
        expect(result).toBe("correct");
      });

      it("when isCorrect is false, but isAnswered is true and choice === title", () => {
        props = getProps("London", "London", true, false);
        const result = functions.correctChecker("class", props);
        expect(result).toBe("incorrect");
      });

      it("when isCorrect is false, but isAnswered is true and choice === title", () => {
        props = getProps("London", "Russia", true, true);
        const result = functions.correctChecker("class", props);
        expect(result).toBe("correct");
      });
    });

    describe("when type is text", () => {
      it("when isCorrect and isAnswered are true and choice is equal to title", () => {
        props = getProps("London", "London", true, true);
        const result = functions.correctChecker("text", props);
        expect(result).toBe("CORRECT!");
      });

      it("when isCorrect is false, but isAnswered is true and choice === title", () => {
        props = getProps("London", "London", true, false);
        const result = functions.correctChecker("text", props);
        expect(result).toBe("INCORRECT!");
      });

      it("when isCorrect is false, but isAnswered is true and choice === title", () => {
        props = getProps("London", "Russia", true, true);
        const result = functions.correctChecker("text", props);
        expect(result).toBe("CORRECT!");
      });
    });
  });
});
