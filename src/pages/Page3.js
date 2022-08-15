import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Page3 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Page 3</h2>
      <p>Counter Number: {counter}</p>
    </div>
  );
};

export default Page3;
