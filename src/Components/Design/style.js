import styled from "styled-components";

const Container = styled.div`
  width: 20%;
  /* background-color: green; */
  height: 84vh;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  /* box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08); */
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  margin: 33px 0 0 0;
  transition: all 0.3s;
`;
const Latter = styled.p`
  color: black;
  width: 220px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: #D1D7DB;
    transition: all 0.3s;
    border-radius: 5px;
  }
`;
export { Container, Box,Latter };
