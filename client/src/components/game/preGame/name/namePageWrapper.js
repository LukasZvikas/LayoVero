import React, { Component } from "react";
import { connect } from "react-redux";
import { GameButton, GameInput, Heading } from "../../customComps";
import { askForContact } from "../../../../actions/gameActions";
import MainPageWrapper from "../../MainPageWrapper";

const NamePageWrapper = props => {
  return (
    <MainPageWrapper
      children={actions => {
        return (
          <div className="game-info__main-wrap game-info__wrap-height">
            <Heading
              primaryText={"HOW SHOULD WE"}
              secondaryText={"CALL YOU"}
              tertiaryText={"?"}
            />
            <GameInput
              placeholder={"Enter your name"}
              name="name"
              action={event => actions.setInputState(event)}
              classType={"game-info__input"}
            />
            <GameButton
              name={"Next"}
              classType={"game-info__btn-primary"}
              action={() => actions.buttonAction(props.askForContact)}
            />
          </div>
        );
      }}
    />
  );
};

export default connect(null, { askForContact })(NamePageWrapper);
