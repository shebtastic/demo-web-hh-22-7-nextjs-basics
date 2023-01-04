export default function FelixFanPage({ setState, bla }) {
  return (
    <>
      <h1>Felix!</h1>
      <p>yay!</p>
      <p>{bla}</p>
      <button onClick={() => setState("blubb")}>click me!</button>
    </>
  );
}
