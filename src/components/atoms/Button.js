import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Button = ({ action, onClick }) => {
    switch (action) {
        case 'Add':
            return (
                <StyledButton onClick={onClick}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </StyledButton>
            )
        case 'Edit':
            return (
                <StyledButton onClick={onClick}>
                    <FontAwesomeIcon icon={faEdit} />
                </StyledButton>
            )
        case 'Delete':
            return (
                <StyledButton onClick={onClick}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </StyledButton>
            )
        default:
            return <StyledButton />
    }
}

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: unset;
    outline: unset;
    background: transparent;
    color: #d6d1d1;
    font-size: 20px;

    :hover {
        color: #9a9a9a
    }
`

export default Button;