import React from "react";
import sacreCoeur from "../../../../images/sacreCoeur.png";
import { Heading, GameButton } from "../customComps";

// export const QuestionFrame = () => {
//   return (
//     <div className="game-info">
//       <div className="game-info__correct-count">
//         Question{" "}
//         {localStorage.getItem("resultCount")
//           ? this.incrementedResultCount()
//           : this.state.resultCount + 1}{" "}
//         / 20{" "}
//       </div>
//       <div className="game-info__main-wrap">
//         <Heading
//           primaryText={titleItems.primary}
//           secondaryText={titleItems.special}
//           tertiaryText={"?"}
//         />
//         <div class="game-info__image-box-wrap-main">
//           {this.getRoundQuestions(questionsSource)}
//         </div>
//         {this.renderButtonType(this.state.answered)}
//       </div>
//     </div>
//   );
// };

export const Question = ({
  img,
  title,
  onClick,
  image,
  choice,
  isAnswered,
  isCorrect
}) => {
  //`../../../../images/${image}.png`

  const isChosen = () => {
    if (choice === title) {
      return "chosen";
    }
    return "";
  };

  const answerStyle = () => {
    if (isCorrect && isAnswered && choice === title)
      return <div className="game-info__answer correct">CORRECT!</div>;
    else if (!isCorrect && isAnswered && choice === title)
      return <div className="game-info__answer incorrect">INCORRECT!</div>;
    return <div />;
  };

  return (
    <div>
      <div className={isChosen()}>
        <div className="game-info__image-wrap" onClick={onClick}>
          <img src={sacreCoeur} className="game-info__image" />
        </div>
        <div className="game-info__image-main-title">{title}</div>
      </div>
      {answerStyle()}
    </div>
  );
};

export default Question;
