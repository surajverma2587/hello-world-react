import { Introduction } from "./components/Introduction";
import { List } from "./components/List";

export const App = () => {
  return (
    <div>
      <Introduction />
      <List items={["foo", "bar"]} title="Interests" />
      <List items={["biz", "baz"]} title="Bands" />
    </div>
  );
};
