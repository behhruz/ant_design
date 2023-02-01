import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Text } from "./style";

export const DesignBody = ({ title, prop }) => {
  return (
    <>
      <Container>
        {" "}
        {/* <Routes>
          <Route path="/introduction" />
        </Routes> */}
        <h1>{title}</h1>
        <Text>{prop}</Text>
      </Container>
    </>
  );
};
