import { BrowserRouter } from "react-router-dom";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidenav></Sidenav>
      </div>
    </BrowserRouter>
  );
}

export default App;
