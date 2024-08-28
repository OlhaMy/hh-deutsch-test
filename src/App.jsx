import "./App.css";
import Contact from "./pages/Contact/Contact";
import Quize from "./pages/Quize/Quize";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/test" element={<Quize />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
