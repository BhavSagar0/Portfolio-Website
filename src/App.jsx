import { BrowserRouter } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidenav></Sidenav>
        <Main />
        <Work />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
