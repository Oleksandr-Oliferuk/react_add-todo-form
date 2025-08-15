import { UserWithTodos } from '../../types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  posts: UserWithTodos[];
};

export const TodoList: React.FC<Props> = ({ posts }) => {
  return (
    <section className="TodoList">
      {posts.map((post: UserWithTodos) => {
        return <TodoInfo key={post.todoId} post={post} />;
      })}
    </section>
  );
};
