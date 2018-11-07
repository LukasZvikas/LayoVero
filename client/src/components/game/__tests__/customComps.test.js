import React from "react";
import { shallow } from "enzyme";
import { GameInput, GameButton, Heading, ImageBox } from "../customComps";
import eiffelTower from "../../../images/eiffelTower.png";

describe("GameButton", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      classType: "game-info",
      action: jest.fn(),
      name: "Sign up"
    };
    wrapper = shallow(<GameButton {...props} />);
  });

  it("has a button", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("correct name is passed", () => {
    expect(wrapper.find("button").props().children).toBe("Sign up");
  });
  it("correct className is passed", () => {
    expect(wrapper.find("button").prop("className")).toBe("game-info");
  });

  it("onChange being called successfully", () => {
    wrapper.find("button").prop("onClick")();

    expect(props.action).toHaveBeenCalledTimes(1);
  });
});

describe("GameInput", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      classType: "game-info",
      action: jest.fn(),
      placeholder: "Enter your email"
    };
    wrapper = shallow(<GameInput {...props} />);
  });

  it("has an input", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("has two divs", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
  it("correct placeholder value is passed", () => {
    expect(wrapper.find("input").prop("placeholder")).toBe("Enter your email");
  });
  it("correct className is passed", () => {
    expect(wrapper.find("input").prop("className")).toBe("game-info");
  });

  it("onChange being called successfully", () => {
    wrapper.find("input").prop("onChange")();

    expect(props.action).toHaveBeenCalledTimes(1);
  });
});

describe("Heading", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      primaryText: "hello",
      secondaryText: "there",
      tertiaryText: "world"
    };
    wrapper = shallow(<Heading {...props} />);
  });
  it("correct primaryText is passed", () => {
    expect(wrapper.find("div").props().children[0]).toBe("hello");
  });
  it("correct secondaryText is passed", () => {
    expect(wrapper.find("span").props().children).toBe("there");
  });
  it("correct tertiaryText is passed", () => {
    expect(wrapper.find("div").props().children[4]).toBe("world");
  });
});

describe("ImageBox", () => {
  describe("when status is true", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        img: eiffelTower,
        title: "Round 1",
        status: true
      };
      wrapper = shallow(<ImageBox {...props} />);
    });
    it("image wrapper div has a correct class", () => {
      expect(
        wrapper
          .find("div")
          .at(1)
          .hasClass("game-info__image-wrap")
      ).toEqual(true);
    });

    it("image div has a correct class and image", () => {
      expect(wrapper.find("img").hasClass("game-info__image")).toEqual(true);
      expect(wrapper.find("img").prop("src")).toEqual(eiffelTower);
    });

    it("it does not have coming soon div", () => {
      expect(
        wrapper
          .find("div")
          .at(2)
          .hasClass("game-info__image-main-text")
      ).toEqual(false);
    });
  });
  describe("when status is false", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        img: eiffelTower,
        title: "Round 1",
        status: false
      };
      wrapper = shallow(<ImageBox {...props} />);
    });
    it("image wrapper div has a correct class", () => {
      expect(
        wrapper
          .find("div")
          .at(1)
          .hasClass("game-info__image-wrap cs")
      ).toEqual(true);
    });

    it("image div has a correct class and image", () => {
      expect(wrapper.find("img").hasClass("game-info__image blurred")).toEqual(
        true
      );
      expect(wrapper.find("img").prop("src")).toEqual(eiffelTower);
    });

    it("it has a coming soon div", () => {
      expect(
        wrapper
          .find("div")
          .at(2)
          .hasClass("game-info__image-main-text")
      ).toEqual(true);
    });
  });
});
