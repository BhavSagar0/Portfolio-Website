import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
      </div>
      <Routes>
        <Route path="/#projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
