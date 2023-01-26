import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  /* background-color: red; */
  height: 80vh;

  /* color: white; */
  /* scrollbar-base-color: gold; */
  font-family: sans-serif;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 1;
  overflow: auto;
`;
const Select = styled.select`
  width: 98%;
  height: 40px;
`;
const Option = styled.option`
  height: 40px;
`;
export { Container, Select, Option };
