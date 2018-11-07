import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageWrapper from "../../MainPageWrapper";
import { GameButton, GameInput, Heading } from "../../customComps";
import { showPlan } from "../../../../actions/gameActions";

const ContactPageWrapper = props => {
  return (
    <MainPageWrapper
      children={actions => {
        return (
          <div className="game-info__main-wrap game-info__wrap-height">
            <Heading
              primaryText={"HOW SHOULD WE"}
              secondaryText={"CONTACT YOU"}
              tertiaryText={"?"}
            />
            <GameInput
              placeholder={"Enter your email"}
              name={"name"}
              action={event => actions.setInputState(event)}
              classType={"game-info__input"}
            />
            <GameButton
              name={"Next"}
              classType={"game-info__btn-primary"}
              action={() => actions.buttonAction(props.showPlan)}
            />
          </div>
        );
      }}
    />
  );
};

export default connect(null, { showPlan })(ContactPageWrapper);

//action={() => askForContact()}
