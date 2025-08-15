type Props = {
  name: string;
  mail: string;
};

export const UserInfo: React.FC<Props> = ({ name, mail }) => {
  return (
    <a className="UserInfo" href={`mailto: ${mail}`}>
      {name}
    </a>
  );
};
