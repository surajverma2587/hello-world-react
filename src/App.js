import { v4 as uuidv4 } from "uuid";
import { Introduction } from "./components/Introduction";
import { List } from "./components/List";

export const App = () => {
  const interests = [
    {
      id: uuidv4(),
      label: "Foo",
    },
    {
      id: uuidv4(),
      label: "Foo",
    },
    {
      id: uuidv4(),
      label: "Foo",
    },
    {
      id: uuidv4(),
      label: "Foo",
    },
    {
      id: uuidv4(),
      label: "Foo",
    },
  ];
  const bands = [
    {
      id: uuidv4(),
      label: "Biz",
    },
    {
      id: uuidv4(),
      label: "Biz",
    },
    {
      id: uuidv4(),
      label: "Biz",
    },
  ];

  return (
    <div>
      <Introduction />
      <List items={interests} title="Interests" />
      <List items={bands} title="Bands" />
    </div>
  );
};
