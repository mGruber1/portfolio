import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { Nav } from "./components/nav/nav";

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
