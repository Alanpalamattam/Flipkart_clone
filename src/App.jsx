import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Productfilterpage from "./Productfilter/Productfilterpage";
import Filterpage from "./Productfilter/filterpage/Filterpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/monitors" element={<Productfilterpage/>}/>
        <Route path="/filter" element={<Filterpage/>}/>
      </Routes>          
      {/* <Productfilterpage/> */}
    </Router> 
  );
}
  
export default App;
 
 