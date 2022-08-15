import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from "../context/CounterContext";

const Page1 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Page 1</h2>
      <p>Counter number: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Page1;
