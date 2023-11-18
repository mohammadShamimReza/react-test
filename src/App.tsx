import "./App.css";
import PrimaryButton from "./components/PrimaryButton";

function App() {
  return (
    <>
      <div className="">
        <h1>Hello world</h1>
        <PrimaryButton />
        <PrimaryButton action="Delete" />
      </div>
    </>
  );
}

export default App;
