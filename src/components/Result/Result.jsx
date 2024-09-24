import { useSelector } from "react-redux";
import css from "./Result.module.css";

const Result = () => {
  const { results } = useSelector((state) => state.quiz);

  return (
    <div className={css.wrapper}>
      <h2>Ihre Testergebnisse</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              Datum: {new Date(result.date).toLocaleString()}, Ergebnis:{" "}
              {result.score}/{result.total}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sie haben noch keine Tests durchgeführt.</p>
      )}
    </div>
  );
};

export default Result;
