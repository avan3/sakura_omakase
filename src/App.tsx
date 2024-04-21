import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div
      className={`w-full relative overflow-hidden leading-relaxed antialiased bg-background`}
    >
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
