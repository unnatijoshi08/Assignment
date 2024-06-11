import { useState } from "react";
import TestPage from "./components/TestPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TestPage />
    </div>
  );
}

export default App;
