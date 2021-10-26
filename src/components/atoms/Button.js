import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ icon, onClick, text, ...props }) => {
    return <StyledButton onClick={onClick} props={props}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
    </StyledButton>
}


const StyledButton = styled.button`
    width: fit-content;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: unset;
    outline: unset;
    background-color: ${(p) => p.props.bgColor};
    color:  ${(p) => p.props.color};
    font-size: 20px;
    margin-left: 10px;
    border-radius: 4px;
    padding: 8px 12px;
    
    :hover {
        color: ${(p) => p.props.hoverColor};
    }
`

export default Button;