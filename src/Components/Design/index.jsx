import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Navbars } from "../../Utilities/navbar";
import { DesignBody } from "./DesignBody";
import { Box, Container } from "./style";

export const Design = () => {
  let design = Navbars.filter((v) => v.path == "design")[0].child;

  return (
    <>
      <Box>
        <>
          <Container>
            {" "}
            {design.map((v) => (
              <NavLink  style={{textDecoration: 'none'}} to={v.path}>
                <h1>{v.title}</h1>
              </NavLink>
            ))}
          </Container>
        </>
        {Navbars.map((v) => {
          return (
            <>
              {v.child?.map((i) => (
                <Routes>
                  <Route
                    path={i.path}
                    element={<DesignBody title={i.title} />}
                  />
                </Routes>
              ))}
            </>
          );
        })}
        <Outlet />
      </Box>
    </>
  );
};
