import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotAFound } from "./Components/404";

import { Body } from "./Components/Body";
import { Navbar } from "./Components/Navbar";
// import { Sidebar } from "./Components/Sidebar";
// import { Container } from "./style";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotAFound />} />
          <Route path="/" element={<Body />} />
          <Route path="/Home" element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
