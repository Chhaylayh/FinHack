import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Dashboard from "./component/Dashboard";
import CoL from "./component/CoL";
import CrimeRate from "./component/CrimeRate";
import Environmental from "./component/Environmental";
import Sentiment from "./component/Sentiment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CoL" element={<CoL />} />
        <Route path="/CrimeRate" element={<CrimeRate />} />
        <Route path="/Environmental" element={<Environmental />} />
        <Route path="/Sentiment" element={<Sentiment />} />
      </Routes>
    </Router>
  );
}

export default App;