export default function Demo() {
  return (
    <div className="container">
      <img src="/images/Speaker-1124.jpg" alt="" />
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
