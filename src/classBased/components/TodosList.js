import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { todos } = this.props;
    const { handleChangeProps } = this.props;
    const { deleteTodoProps } = this.props;
    const { setUpdate } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
