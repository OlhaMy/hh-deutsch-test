// Game.jsx
import React from "react";
import s from "./Game.module.css";

export const Game = ({ question, handleClickVariant, percentage }) => {
  return (
    <>
      <div className={s.progress}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h2 className={s.title}>{question.title}</h2>
      <ul>
        {question.variants.map((item, index) => (
          <li
            className={s["item-question"]}
            key={item}
            onClick={() => handleClickVariant(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
