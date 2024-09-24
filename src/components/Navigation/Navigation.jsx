import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/quiz">QuizPage</NavLink>
        </li>
        <li>
          <NavLink to="/courses">CoursesPage</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
