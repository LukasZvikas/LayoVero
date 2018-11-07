import React from "react";
import { shallow, mount } from "enzyme";
import ContactPageWrapper from "../ContactPageWrapper";
import { GameInput, GameButton, Heading } from "../../../customComps";
import Root from "../../../../../root";

describe("ContactPageWrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <ContactPageWrapper />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has a Heading", () => {
    expect(wrapper.find(Heading)).toHaveLength(1);
  });

  it("has a GameInput", () => {
    expect(wrapper.find(GameInput)).toHaveLength(1);
  });
  it("has a GameButton", () => {
    expect(wrapper.find(GameButton)).toHaveLength(1);
  });
});
