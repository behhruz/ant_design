import { NavLink, Route, Routes } from "react-router-dom";
import { All, Button, Container, Latter, Latter1 } from "./style";

export const Body = () => {
  return (
    <>
      <Container>
        <Latter> Ant Design 5.0</Latter>
        <Latter1>
          Help designers/developers building beautiful products more flexible
          and working with happeness
        </Latter1>
        <All>
          <NavLink to={"components"}>
            <Button get>Getting Started</Button>
          </NavLink>
          <NavLink to={"design"}>
            <Button des>Design Launguage</Button>
          </NavLink>
        </All>
      </Container>
    </>
  );
};
