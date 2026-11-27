import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import CreateTask from "./CreateTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-task" element={<CreateTask />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
