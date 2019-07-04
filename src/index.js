import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef
} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Count = forwardRef((props, ref) => {
  const [count, setCount] = useState(1);

  const onClick = number => {
    setCount(count + number);
  };

  useImperativeHandle(ref, () => ({
    count,
    onClick
  }));

  return <div>Count {count}</div>;
});

const App = () => {
  const countRef = useRef();

  const handleClick = () => {
    countRef.current.onClick(1);
  };

  return (
    <div className="App">
      <Count ref={countRef} />
      <button onClick={handleClick}> Increment </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
