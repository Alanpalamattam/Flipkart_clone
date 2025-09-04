import React, { useEffect, useState } from "react";
import Headersection from "../headersection/Headersection";
 import Productdetails from "./Productdetails";
import FilterSelection from "../filterpage/FilterSelection";
import { useItems } from "../../context/Filtercontext";
import MonitorLarge from "../../components/Pages/MonitorLarg/MonitorLarge";
const Sortparent = () => {
  const { items,setItems} = useItems();
  const [sortType, setSortType] = useState("popularity");

   useEffect(() => {         
  let sorted = [...items];  

  if (sortType === "popularity") {  
    sorted.sort((a, b) => b.ratingpercent - a.ratingpercent);
  } else if (sortType === "lowtohigh") { 
    sorted.sort((a, b) => 
      Number(a.org_price.replace(/,/g, "")) - Number(b.org_price.replace(/,/g, ""))
    );
  } else if (sortType === "hightolow") {
    sorted.sort((a, b) => 
      Number(b.org_price.replace(/,/g, "")) - Number(a.org_price.replace(/,/g, ""))
    );
  } else if (sortType === "newest") {
    sorted.sort((a, b) => a.id - b.id);
  }
  setItems(sorted);  
  console.log("sort", sorted);  
}, [sortType]);   

  return (
    
    <div>
      <Headersection sortType={sortType} onSortChange={setSortType} />
       {/* <Productdetails items={items}  /> */}
      
        <MonitorLarge/>
   
    </div>
  );
};

export default Sortparent;
 