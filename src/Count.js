import React, { useState, useRef } from 'react';

const Count = React.memo(
  ({ onOdd }) => {
    const [count, setCount] = useState(0);
    const renders = useRef(0);

    return (
      <>
        <div>Count: {count}</div>
        <div>Renders: {renders.current++}</div>
        <button
          onClick={() => {
            if (count % 2 === 0) {
              onOdd();
            }
            setCount(c => c + 1);
          }}
        >
          Increment
        </button>
      </>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.data.isEven !== nextProps.data.isEven) {
      return false;
    }
    return true;
  }
);

export default Count;
