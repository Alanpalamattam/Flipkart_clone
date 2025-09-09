import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
 import Productfilterpage from "./components/Productfilter/Productfilterpage";
import Filterpage from "./components/Productfilter/filterpage/Filterpage";
import { ItemsProvider } from "./context/Filtercontext";
import Footer from "./components/Footer";
 
function App() {
  return (
    <React.StrictMode>
    <Router>
      <ItemsProvider>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/monitors" element={<Productfilterpage/>}/>
        <Route path="/filter" element={<Filterpage/>}/>
      </Routes>          
      </ItemsProvider>
      {/* <Productfilterpage/> */}
     </Router> 
     <Footer/>
    </React.StrictMode>
  );
}
  
export default App;
 
 