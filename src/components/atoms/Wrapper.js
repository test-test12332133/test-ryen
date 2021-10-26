import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
  border-radius: 4px;
  box-shadow: ${(props) => props.shadow && '0px 4px 16px rgba(0, 0, 0, 0.08)'};
  padding: 16px;
  background: #FFFFFF;
  font-size: 30px;
  width: ${(props) => props.width};
`;

export default Wrapper;