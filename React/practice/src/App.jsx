import { useState } from "react";
import Counter from "./components/Counter";
import List from "./components/List";
import Todos from "./components/Todos";

// jSX - JavaScript XML
/**
 * if(show === true) {
 *  <Counter />
 * } else {
 * <List />
 * }
 *
 */

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* Conditional Rendering */}
      {/* {show === true ? <Counter /> : <List />}
      <button
        onClick={() => setShow((prev) => !prev)}
        style={{ marginTop: 100, display: "inline-block" }}
      >
        Change view
      </button> */}
      <Todos />
    </div>
  );
}
export default App;
