import Navbar from "./components/Navbar";
import "./App.scss";
import "./routes/HomePage";
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="naviation">
        <Navbar />
      </div>
      <div className="page-contents">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
