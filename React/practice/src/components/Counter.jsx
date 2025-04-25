import { useEffect, useState } from "react";
import "../styles/counter.css";

// Components have 3 states -> Mount, Update, UnMount

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted...");

    return () => console.log("UnMounted...");
  }, [count]);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  return (
    <section>
      <h1>Counter App</h1>
      <div className="mt-10">
        <button
          onClick={incrementCount}
          onMouseEnter={() => {
            console.log("Mouse entered...");
          }}
          onMouseLeave={() => {
            console.log("Mouse Leaved...");
          }}
        >
          +
        </button>
        <span className="text-center mx-[20px]">{count}</span>
        <button onClick={decrementCount}> - </button>
      </div>
    </section>
  );
};

export default Counter;
