import React,{useEffect, useState} from 'react'
import Product_map_large from './Product_map_large'
import { useItems } from "../../../../context/Filtercontext";

const Monitor_productdisplay = () => {
    const [sorttype,setSortType]=useState("popularity")
    
      const { items,setItems} = useItems();
   useEffect(()=>{
    let sorted=[...items]
     if (sorttype === "popularity") {  
    sorted.sort((a, b) => b.ratingpercent - a.ratingpercent);
  } else if (sorttype === "lowtohigh") { 
    sorted.sort((a, b) => 
      Number(a.org_price.replace(/,/g, "")) - Number(b.org_price.replace(/,/g, ""))
    );
  } else if (sorttype === "hightolow") {
    sorted.sort((a, b) => 
      Number(b.org_price.replace(/,/g, "")) - Number(a.org_price.replace(/,/g, ""))
    );
  } else if (sorttype === "newest") {
    sorted.sort((a, b) => a.id - b.id);
  }
  setItems(sorted)
   },[sorttype])
  return (
    <div className='filter-display-main-large'>
      <div className="pdisplay-large-header">
        <div className="p-diplay-main">
          <div className="p-display-area1">
            <div className="p-display-row1">
              <div className="p-display-row1-hometext">
                <a href="/">Home</a>
                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="p-diplay-right-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
              </div>
              <div className="p-display-row1-hometext">
                <a href="">Computers</a>
                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="p-diplay-right-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
              </div>
              <div className="p-display-row1-hometext">
                <a href="">Computer Components</a>
                <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="p-diplay-right-arrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
              </div>
              <div className="p-display-row1-hometext">
                <a href="">Monitors</a>
               </div>
            </div>
            <div className="p-display-area2">
           <div className="p-display-area2-content">
            <a href="">Computers</a>
            <br />
           </div>
           
          </div>
          <h1 className='p-display-monitor-heading'>Monitors</h1>
          <span className='p-display-showing-text'>(Showing 1 – 24 products of 74 products)</span>
          <div className="sortarea-large-filter">
            <span className='sort-text1-filter'>Sort By</span>
            <div className={sorttype==="popularity"?"sort-text2-filter":"sort-text3-filter"} onClick={()=>setSortType("popularity")}>Popularity</div>
            <div className={sorttype==="lowtohigh"?"sort-text2-filter":"sort-text3-filter"} onClick={()=>setSortType("lowtohigh")}>Price -- Low to High </div>
            <div className={sorttype==="hightolow"?"sort-text2-filter":"sort-text3-filter"} onClick={()=>setSortType("hightolow")}>Price -- High to Low </div>
            <div className={sorttype==="newest"?"sort-text2-filter":"sort-text3-filter"} onClick={()=>setSortType("newest")}>Newest First</div>

          </div>
          </div>
        </div>
      </div>    
      <Product_map_large/>
    </div>           
  )
}

export default Monitor_productdisplay

    