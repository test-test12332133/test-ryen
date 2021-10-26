import styled from 'styled-components';

const Checkbox = ({ onChange }) => (
  <StyledLabel onChange={onChange} >
    <StyledCheckbox type='checkbox' />
    <StyledSpan />
  </StyledLabel>
)

const StyledCheckbox = styled.input`
  position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
      :hover ~ span {
        border: 1px solid #1F49AD;
      }
      :checked ~ span {
        background-color: #1F49AD;
        border: 1px solid #1F49AD;
      }
      :checked ~ span:after {
        display: block;
      }
      :disabled ~ span {
        background-color: #F2F2F5;
        border: 1px solid #BEBEC4;
      }
      :disabled ~span:after {
        border: solid #BEBEC4;
        border-width: 0 2px 2px 0;
      }
`

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  width: fit-content;

  span:after {
    left: 6px;
    top: 1px;
    width: 7px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    border-radius: 2px;
    transform: rotate(45deg);
  }
`

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #BEBEC4;

  :after {
    content: '';
    position: absolute;
    display: none;
  }
`

export default Checkbox;