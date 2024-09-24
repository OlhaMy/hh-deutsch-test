// Quize.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Game } from "../Game/Game";
import Result from "../Result/Result";
import { answerQuestion, resetQuiz, addResult } from "../../redux/quizSlice";
import css from "./Quiz.module.css";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, correctAnswers } = useSelector(
    (state) => state.quiz
  );

  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];

  const handleClickVariant = (selectedIndex) => {
    dispatch(answerQuestion({ selectedAnswerIndex: selectedIndex }));
  };

  const restartGame = () => {
    dispatch(addResult()); // Ergebnis speichern
    dispatch(resetQuiz());
  };

  if (currentQuestionIndex >= totalQuestions) {
    // Quiz beendet
    return (
      <div className={css.wrapper}>
        <div className={css.box}>
          <Result
            correct={correctAnswers}
            total={totalQuestions}
            restartGame={restartGame}
          />
        </div>
      </div>
    );
  }

  const percentage = Math.round((currentQuestionIndex / totalQuestions) * 100);

  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <Game
          percentage={percentage}
          question={question}
          handleClickVariant={handleClickVariant}
        />
      </div>
    </div>
  );
};

export default Quiz;
