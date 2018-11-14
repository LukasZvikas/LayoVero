import React from "react";
import { shallow, mount } from "enzyme";
import NamePageWrapper from "../NamePageWrapper";
import MainPageWrapper from "../../../MainPageWrapper";
import { GameInput, GameButton, Heading } from "../../../customComps";
import Root from "../../../../../root";

const beforeEachHelper = (wrapper, actions) => {
  return shallow(wrapper.find(MainPageWrapper).prop("children")(actions));
};

describe("namePageWrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <NamePageWrapper />
      </Root>
    );
  });
  describe("when MainPageWrapper is called", () => {
    let actions;
    let mainWrapper;
    beforeEach(() => {
      actions = {
        setInputState: jest.fn(),
        buttonAction: jest.fn()
      };

      mainWrapper = beforeEachHelper(wrapper, actions);
    });
    it("has a Heading", () => {
      expect(mainWrapper.children().find(Heading)).toHaveLength(1);
    });

    it("has a GameInput", () => {
      expect(mainWrapper.children().find(GameInput)).toHaveLength(1);
    });
    it("has a GameButton", () => {
      expect(mainWrapper.children().find(GameButton)).toHaveLength(1);
    });

    it("setInputState is called onChange", () => {
      mainWrapper.find(GameInput).prop("action")();

      expect(actions.setInputState).toHaveBeenCalledTimes(1);
    });

    it("buttonAction is called onClick", () => {
      mainWrapper.find(GameButton).prop("action")();

      expect(actions.buttonAction).toHaveBeenCalledTimes(1);
    });
  });
});
