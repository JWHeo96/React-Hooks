export default function App() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
      <div className="App">
        <div>Hi</div>
      </div>
    );
}
  