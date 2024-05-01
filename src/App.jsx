const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return <div>app</div>;
}
export default App;
