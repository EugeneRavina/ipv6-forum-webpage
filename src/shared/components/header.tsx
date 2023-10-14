interface IProps {
  title: string;
}

function Header(props: IProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.title}</h1>
    </div>
  );
}

export default Header;
