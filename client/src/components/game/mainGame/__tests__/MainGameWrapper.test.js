import React from "react";
import MainGameWrapper from "../MainGameWrapper";
import * as functions from "../functions";
import { localStorageMock } from "./lsMock";
import Question from "../question";
import { mount } from "enzyme";

describe("MainGameWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MainGameWrapper />);
  });

  it("has something", () => {
    console.log("wrapper", wrapper);
  });
});
