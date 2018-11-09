import moulinRouge from "../../../../images/moulinRouge.png";
import louvre from "../../../../images/louvre.png";
import eiffelTower from "../../../../images/eiffelTower.png";
import arcDeTriomphe from "../../../../images/arcDeTriomphe.png";

import champsElysees from "../../../../images/champsElysees.png";
import disneyland from "../../../../images/disneyland.png";
import notreDame from "../../../../images/notreDame.png";
import sacreCoeur from "../../../../images/sacreCoeur.png";
export default [
  {
    id: 1,
    title: "which building was supposed to be temporary ?",
    primaryText: "which building was supposed to be",
    specialWord: "temporary",
    turn: true,

    items: [
      {
        title: "Moulin Rouge",
        image: moulinRouge,
        correct: false,
        status: true
      },
      {
        title: "The Louvre",
        image: louvre,
        correct: false,
        status: true
      },
      {
        title: "The Eiffel Tower",
        image: eiffelTower,
        correct: true,
        status: true
      },
      {
        title: "Arc de Triomphe",
        image: arcDeTriomphe,
        correct: false,
        status: true
      }
    ]
  },
  {
    id: 2,
    title: "which one is the most fun ?",
    primaryText: "which one is the most",
    specialWord: "fun",
    turn: false,
    items: [
      {
        title: "Champs Élysées",
        image: champsElysees,
        correct: false,
        status: true
      },
      {
        title: "disneyland",
        image: disneyland,
        correct: true,
        status: true
      },
      {
        title: "Notre Dame de Paris",
        image: notreDame,
        correct: true,
        status: true
      },
      {
        title: "Sacré Cœur",
        image: sacreCoeur,
        correct: false,
        status: true
      }
    ]
  }
];

