import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotAFound } from "./Components/404";
import { Navbars } from "./Utilities/navbar";
import { Body } from "./Components/Body";
import { Navbar } from "./Components/Navbar";
import { RouterPage } from "./Components/RouterPage";
import { RouterBody } from "./Components/RouterBody";
import { RouterSidebar } from "./Components/RouterSidebar";
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
          {Navbars.map((v) => {
            return (
              <>
                <Route path={v.path} element={v.element} />
                {v.key?.map((i) => {
                  return (
                    <>
                      <Route path={i.path} element={<RouterPage />} />
                    </>
                  );
                })}
              </>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
