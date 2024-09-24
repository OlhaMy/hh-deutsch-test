import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h2>Seite nicht gefunden</h2>
      <p>Die von Ihnen gesuchte Seite existiert nicht.</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
};

export default NotFoundPage;
