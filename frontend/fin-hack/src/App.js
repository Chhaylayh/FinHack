import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import NotFound from "./component/NotFound";
import Dashboard from "./component/Dashboard";
import CostOfLiving from "./component/CostOfLiving";
import CrimeRate from "./component/CrimeRate";
import Environmental from "./component/Environmental";
import Sentiment from "./component/Sentiment";
import Search from "./component/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CostOfLiving" element={<CostOfLiving />} />
        <Route path="/CrimeRate" element={<CrimeRate />} />
        <Route path="/Environmental" element={<Environmental />} />
        <Route path="/Sentiment" element={<Sentiment />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;