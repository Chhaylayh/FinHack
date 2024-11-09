import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;