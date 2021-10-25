import Wrapper from './atoms/Wrapper';
import Button from './atoms/Button';

const TodoItem = ({ task }) => {
    return (
        <Wrapper>
            {task}
            <Button action='Edit' />
            <Button action='Delete' />
        </Wrapper>
    )
}

export default TodoItem;