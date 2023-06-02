import { useState } from 'react';

export default function Demo() {
  const [cnt, setCnt] = useState(10);

  return <button onClick={() => setCnt(cnt + 1)}>{cnt}</button>;
}
