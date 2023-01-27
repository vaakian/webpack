import { store } from "../utils/createStore";

export default function ExternalStore() {
  const age = store.useStore2((state) => state.age);
  const increment = () => {
    store.setState({ age: age + 1 });
  }
  return <h3 onClick={increment}>age: {age}</h3>
}