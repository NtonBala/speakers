import { useState, useReducer } from 'react';

export default function Demo() {
  // const [cnt, setCnt] = useState(10);
  // * This code works exactly like useState did
  const [cnt, setCnt] = useReducer((_, action) => action, 10);

  return <button onClick={() => setCnt(cnt + 1)}>{cnt}</button>;
}
