import { Outlet, Route, Routes } from "react-router-dom";
import { Navbars } from "../../Utilities/navbar";
import { RouterBody } from "../RouterBody";
import { RouterSidebar } from "../RouterSidebar";
import { Container } from "./style";

export const RouterPage = () => {
  return (
    <>
      <Container>
        <RouterSidebar />
        <Routes>
          {Navbars.map((v) => {
            return (
              <>
                {v.key?.map((i) => {
                  <Route
                    path={i.path}
                    element={<RouterBody title={i.title} />}
                  />;
                })}
              </>
            );
          })}
        </Routes>
      </Container>
    </>
  );
};
