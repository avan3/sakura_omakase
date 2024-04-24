import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import cherryBlossom from "./assets/cherry_blossom_bg.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className={`w-full h-full m-auto relative overflow-hidden leading-relaxed antialiased bg-background`}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex justify-center items-center h-full">
                {/* <img
          src={cherryBlossom}
          alt="Cherry Blossoms"
          className="fixed left-0 top-0 bg-cover"
        /> */}
                <Navbar />
                <Hero />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
