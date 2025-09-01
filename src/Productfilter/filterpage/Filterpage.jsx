import React from 'react'
import "../filter.css"
import { Link } from 'react-router-dom'
import "./productfilter.css"
const Filterpage = () => {
  return (
    <div>
     <div className="filtercontainer"> 
      <div className="filter-top">
                 <div className="backbutton">
                    <Link to='/monitors'>
                    <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
                    </Link>
                </div>
                <div className="filter-text">Filters</div>
      </div>
      <div className="filterbottom">
        <div className="filterbottom-flex">
          <div className="filterbottom-right">
            <div className="filterbottom-number">74</div>
            <div className="product-foundtxt">products found</div>
          </div>
          <div className="filerbottom-left">
            <div className="applybutton">Apply</div>
          </div>   
        </div>
      </div>
    </div>
    </div>    
  )
}

export default Filterpage
