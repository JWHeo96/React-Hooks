export default function App() {
    const { enablePrevent, disblePrevent } = usePreventLeave();
    return (
      <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disblePrevent}>Unprotect</button>
      </div>
    );
  }
  