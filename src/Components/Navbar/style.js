import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
`;
const Box1 = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 15px;
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  margin: 0 45px 0 0;
`;
const Img1 = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 0 0 25px;
  width: ${({ lupa }) => lupa && "18px"};
  height: ${({ lupa }) => lupa && "18px"};
  margin: ${({ lupa }) => lupa && "0 0 0 90px"};
  width: ${({ global }) => global && "24px"};
  height: ${({ global }) => global && "24px"};
`;
const Ant = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin: 0 10px;
  /* border: none; */
  color: black;
  text-decoration: none;
`;
const Input = styled.input`
  width: 250px;
  border: none;
  font-size: 14px;
  &:checked,
  &:not(:checked) {
    border: none;
  }
`;
const Latter = styled.p`
  margin: 0 7px;
  transition: all 0.2s;
  cursor: pointer;
  color: black;
  &:hover {
    border-top: 1.9px solid #1677ff;
    transition: all 0.2s;
    /* color: #1677ff; */
  }
`;
const Select = styled.select`
  width: 70px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin: 0 10px;
`;
export { Container, Box1, Box2, Img1, Ant, Input, Latter, Select };
