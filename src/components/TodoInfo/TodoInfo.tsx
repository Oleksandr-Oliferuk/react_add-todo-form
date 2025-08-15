import { UserWithTodos } from '../../types';
import { UserInfo } from '../UserInfo';
import cn from 'classnames';

type Props = {
  post: UserWithTodos;
};
export const TodoInfo: React.FC<Props> = ({ post }) => {
  // console.log(post);і

  return (
    <article
      data-id="1"
      className={cn('TodoInfo', { 'TodoInfo--completed': post.completed })}
    >
      <h2 className="TodoInfo__title">{post.title}</h2>

      <UserInfo name={post.user.name} mail={post.user.email} />
    </article>
  );
};
