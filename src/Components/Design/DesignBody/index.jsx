import React from "react";
import { Container, Text } from "./style";

export const DesignBody = ({ title, prop }) => {
  return (
    <>
      <Container>
        {" "}
        <h1>{title}</h1>
        <Text>{prop}</Text>
      </Container>
    </>
  );
};
