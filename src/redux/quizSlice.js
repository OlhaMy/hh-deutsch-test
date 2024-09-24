// reducers/quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../helpers/questions"; // Шлях може потребувати коригування

const initialState = {
  questions: questions,
  results: [],
  currentQuestionIndex: 0,
  correctAnswers: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.correctAnswers = 0;
    },
    answerQuestion(state, action) {
      const { selectedAnswerIndex } = action.payload;
      const currentQuestion = state.questions[state.currentQuestionIndex];

      if (selectedAnswerIndex === currentQuestion.correct) {
        state.correctAnswers += 1;
      }

      state.currentQuestionIndex += 1;
    },
    addResult(state) {
      const result = {
        date: new Date().toISOString(),
        score: state.correctAnswers,
        total: state.questions.length,
      };
      state.results.push(result);
    },
  },
});

export const { resetQuiz, answerQuestion, addResult } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
