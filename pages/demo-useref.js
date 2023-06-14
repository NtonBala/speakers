import { useRef } from 'react';

export default function Demo() {
  // useRef use case #1: reference DOM
  const imgRef = useRef();

  return (
    <div className="container">
      <img
        src="/images/Speaker-1124.jpg"
        alt=""
        ref={imgRef}
        style={{ filter: 'grayscale(100%)' }}
        onMouseOver={() => {
          imgRef.current.style.filter = 'grayscale(0%)';
        }}
        onMouseOut={() => {
          imgRef.current.style.filter = 'grayscale(100%)';
        }}
      />
      <hr />
      <button
        onClick={() => {
          alert('Registered!');
        }}
      >
        Register
      </button>
    </div>
  );
}
