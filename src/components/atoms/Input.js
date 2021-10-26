import styled, { css } from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  border: unset;
  border-radius: 4px;
  background: ${(props) => props.background};
  color: #000;
  width: 194px;
  height: 34px;
  padding: 10px;
  outline: unset;
  font-size: 18px;
  margin-left: 5px;

  ::placeholder {
    color: #6F6F6F
  }

  :focus {
    border: solid #BDBDBD 1px;
    ${(props) => props.isItem && css`
      border-width: 0 0 1px 0;
      border-radius: unset;
    `}
  }
  :disabled {
    color: grey;
    text-decoration: line-through;
    background-color: transparent;
  }
`;

export default Input;