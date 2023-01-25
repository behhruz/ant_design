import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;
const Latter = styled.h1`
  font-size: 70px;
`;
const Latter1 = styled.p`
  font-size: 20px;
  margin: -20px 0;
`;
const All = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #1677ff;
  color: white;
  font-size: 15px;
  border: ${({ des }) => des && "1px solid rgba(0, 0, 0, 0.08) "};
  background-color: ${({ des }) => des && "white"};
  color: ${({ des }) => des && "black"};
  margin: 65px 15px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #4b9aff;
    border: ${({ des }) => des && "1px solid #1677ff"};
    background-color: ${({ des }) => des && "white"};
    color: ${({ des }) => des && "#1677ff"};
    transition: all 0.2s;
  }
`;

export { Container, Latter, Latter1, All, Button };
