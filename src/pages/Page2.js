import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Page2 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Page 2</h2>
      <p>Counter number: {counter}</p>
    </div>
  );
};

export default Page2;
