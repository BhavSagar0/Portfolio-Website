import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
