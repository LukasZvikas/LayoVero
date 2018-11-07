import {
  askForAuth,
  askForName,
  askForContact,
  showPlan
} from "../gameActions";

import {
  INITIAL_PAGE,
  AUTH_PAGE,
  NAME_PAGE,
  CONTACT_PAGE,
  PLAN_PAGE
} from "../../reducers/types";

describe("askForAuth", () => {
  it("has the corect type", () => {
    let action = askForAuth();

    expect(action.type).toEqual(AUTH_PAGE);
  });
});

describe("askForName", () => {
  it("has the corect type", () => {
    let action = askForName();

    expect(action.type).toEqual(NAME_PAGE);
  });
});

describe("showPlan", () => {
  it("has the corect type", () => {
    let action = showPlan();

    expect(action.type).toEqual(PLAN_PAGE);
  });
});
