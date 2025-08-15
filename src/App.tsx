import './App.scss';
import { TodoList } from './components/TodoList';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { User, UserWithTodos } from './types';
import { Todo } from './types';
import { Form } from './components/Form/Form';
import { useState } from 'react';

// function preperedData(users: User[], todos: Todo[]): UserWithTodos[] {
//   const unionData = users.map((user: User) => {
//     return {
//       ...user,
//       todos: todos.filter((todo: Todo) => todo.userId === user.id),
//     };
//   });

//   return unionData;
// }
function preperedData(users: User[], todos: Todo[]): UserWithTodos[] {
  const unionData = todos.map((todo: Todo) => {
    return {
      user: users.find((user: User) => todo.userId === user.id)!,
      title: todo.title,
      todoId: todo.id,
      completed: todo.completed,
    };
  });

  return unionData;
}

export const App = () => {
  const visibleData = preperedData(usersFromServer, todosFromServer);

  const [todos, setTodos] = useState<UserWithTodos[]>(visibleData);
  const addTodos = (newTodos: UserWithTodos) => {
    setTodos(prevTodos => [...prevTodos, newTodos]);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <Form users={usersFromServer} todos={todos} onSubmit={addTodos} />
      <TodoList posts={todos} />
    </div>
  );
};
