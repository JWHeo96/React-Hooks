export default function App() {
    const onFullS = (isFull) => {
      console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
          <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
          <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    );
  }