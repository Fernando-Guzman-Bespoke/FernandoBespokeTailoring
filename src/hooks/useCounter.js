import { useState } from 'react';

function useTrigger() {
  const [count, setCount] = useState(0);
  const nextNumber = () => setCount((lastVal) => lastVal + 1);
  const resetNumber = () => setCount(0);

  return [count, nextNumber, resetNumber];
}

export default useTrigger;
