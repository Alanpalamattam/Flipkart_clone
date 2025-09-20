import React from "react";
import "../styles/mobileheader.css";
const Searchbar = () => {
  return (
    <div style={{alignItems:"center"}}>
      <div className="locationwrapper">
        <div className="locationmain">
          <div className="locationa">
            <div className="pincode">
              <img  className="locationsvg" src="/locationflip.svg" alt="" />
              <div className="pincodenumber">
                670644
              </div>
            </div>
            <div className="seacrchlocationcontent">
              <div className="searchlocationwrapper">
                <div className="searchlocatopntext">
                  Select delivery location
                </div>
                <svg width="16" height="16" fill="none" viewBox="0 0 17 17" className="Loactionarrow"><path d="m6.627 3.749 5 5-5 5" stroke="#1254E7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchbar">
        <div className="searchbarwrapper">
          <div className="searchbarcontent">
            <div className="searchicon">
              <img src="/searchiconflip.svg" alt="" />
            </div>
            <div className="searchtextwrapper">
              <div className="searchtext">Search for Products</div>
             </div>
          </div>
        </div>
      </div>
    </div>     
  );
};

export default Searchbar; 
