interface IProps {
  title: string;
}

function Header(props: IProps) {
  return (
    <div className="bg-sky-800">
      <h1 className="text-2xl font-bold text-left text-white p-4">
        {props.title}
      </h1>
    </div>
  );
}

export default Header;
