import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import CreateTask from "./CreateTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/create-task" element={<CreateTask />} />
    </Routes>
  );
}

export default App;
