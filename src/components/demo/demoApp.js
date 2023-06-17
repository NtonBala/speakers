import { useEffect } from 'react';

// * Component is located on /demo-usestate path
export default function DemoApp({ useState }) {
  const [text1, setText1] = useState('First');
  const [text2, setText2] = useState('Second');

  useEffect(() => {
    document.title = `${text1.length}`;
  });

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>

      <input type="text" onChange={(e) => setText1(e.target.value)} value={text1} />
      <hr />
      <input type="text" onChange={(e) => setText2(e.target.value)} value={text2} />
      <hr />
      <h2>
        <i>
          {text1} {text2}
        </i>
      </h2>
    </div>
  );
}
