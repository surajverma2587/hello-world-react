export const List = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
