import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About"
import Projects from "./Pages/ProjectsPage"
import Resume from "./Pages/Resume"
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
