import { BrowserRouter } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidenav></Sidenav>
        <Main />
        <Work />
      </div>
    </BrowserRouter>
  );
}

export default App;
