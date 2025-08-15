import { UserWithTodos } from '../../types';
import { UserInfo } from '../UserInfo';

type Props = {
  post: UserWithTodos;
};
export const TodoInfo: React.FC<Props> = ({ post }) => {
  return (
    <article data-id="1" className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{post.title}</h2>

      <UserInfo name={post.user.name} mail={post.user.email} />
    </article>
  );
};
