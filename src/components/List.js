export const List = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map(({ id, label }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </div>
  );
};
