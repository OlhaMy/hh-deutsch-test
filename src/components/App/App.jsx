import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import QuizPage from "../../pages/QuizPage/QuizPage";

import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CoursesPage from "../../pages/CoursesPage/CoursesPage";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import Layout from "../Layout/Layout";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
