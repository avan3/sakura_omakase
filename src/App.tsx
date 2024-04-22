import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div
      className={`w-full relative overflow-hidden leading-relaxed antialiased bg-background`}
    >
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        <Hero />
      </div>
    </div>
  );
}

export default App;
