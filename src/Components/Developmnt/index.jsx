import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Navbars } from "../../Utilities/navbar";
import { DesignBody } from "../Design/DesignBody";
import { Box, Container, Latter } from "../Design/style";

export const Development = () => {
  let design = Navbars.filter((v) => v.path == "development")[0].child;

  return (
    <>
      <Box>
        <>
          <Container>
            {" "}
            {design.map((v) => (
              <NavLink style={{ textDecoration: "none" }} to={v.path}>
                <Latter>{v.title}</Latter>
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
                    element={<DesignBody title={i.title} prop={i.text} />}
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