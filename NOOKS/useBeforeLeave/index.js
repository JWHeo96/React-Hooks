export default function App() {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }