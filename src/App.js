import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Components/Content/Content";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Resume from "./Pages/Resume/Resume";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<Navigation Children={About} />}></Route>
            <Route
              path="/project"
              element={<Navigation Children={Project} />}
            ></Route>
            <Route
              path="/resume"
              element={<Navigation Children={Resume} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
