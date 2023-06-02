import { useReducer } from 'react';

export default function Demo() {
  const [cnt, setCnt] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + action.incrementValue;
      default:
        return state;
    }
  }, 10);

  return <button onClick={() => setCnt({ type: 'increment', incrementValue: 1 })}>{cnt}</button>;
}
