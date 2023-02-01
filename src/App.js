import { Routes, Route } from "react-router-dom";
import { NotAFound } from "./Components/404";
import { Body } from "./Components/Body";
import { Navbar } from "./Components/Navbar";
import { Navbars } from "./Utilities/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="*" element={<NotAFound />} />
        {Navbars.map((v) =>
          v.child ? (
            <>
              <Route path={v.path} element={v.element}>
                {v.child.map((i) => (
                  <Route path={`${i.path}`} />
                ))}
              </Route>
            </>
          ) : (
            <Route path={v.path} element={v.element} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
