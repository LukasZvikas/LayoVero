import React from "react";
import { ImageBox } from "./customComps";
//import GameImageBox from "./mainGame/gameImageBox";

export const errorRenderer = (nameOfClass, msg) => {
  let errEl = document.getElementsByClassName(nameOfClass)[0];
  errEl.innerHTML = msg;
  return errEl.innerHTML;
};

// export const renderBoxes = (arr, type) => {
//   if (type == "example") {
//     return arr.map(item => (
//       <ImageBox
//         img={item.image}
//         title={item.title}
//         status={item.status}
//         key={item.title}
//       />
//     ));
//   }

//   //return arr.map(item => <GameImageBox img={item.image} title={item.title} />);
// };

export const removeFooter = () => {
  let footer = document.getElementsByClassName("footer__img-main")[0];
  if (footer) footer.remove();
  let el = document.getElementsByTagName("body")[0];
  el.style.backgroundColor = "#fff";
};

export const renderRoundBoxes = (arr, action) => {
  return arr.map(item => {
    if (item.status) {
      return (
        <ImageBox
          img={item.image}
          title={item.title}
          status={item.status}
          key={item.title}
        />
      );
    }
    return (
      <ImageBox
        img={item.image}
        title={item.title}
        status={item.status}
        key={item.title}
      />
    );
  });
};
