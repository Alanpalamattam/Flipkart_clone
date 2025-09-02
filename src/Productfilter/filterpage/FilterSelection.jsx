import React, { useEffect, useState } from "react";
import { checkbox } from "./filtercheckboxes.json";
const FilterSelection = () => {
  const [filter, setfilter] = useState(0);
  const [selectedfilters,setselectedfilters]=useState({})
  const handleTick=(category,item)=>{
   setselectedfilters((prev)=>{
    const prevValues=prev[category] || [];
    if (prevValues.includes(item)) {
        return {
          ...prev,
          [category]: prevValues.filter((v) => v !== item),
        };
      } else {   
        return {
          ...prev,
          [category]: [...prevValues, item],
        };
      }
   })
    console.log(category)
  }
  useEffect(()=>{
    console.log("ticked filters:",selectedfilters)
    
  },[selectedfilters])
  return (
    <div>  
      <div className="Filterselection-main">
        <div className="selection-flex">
          <div className="filter-leftarea">
            {checkbox.map((checkitem, index) => (
              <div className="filtercategory-names-outer">
              <div
                className="filtercategory-names"
                onClick={() => setfilter(index)}
                style={{
                  paddingTop:index%2==0?"13px":"12px",
                  backgroundColor: filter === index ? "white" : "rgb(241, 243, 246)",
                  color: filter === index ? "#2874F0" : "black"
                }}
                key={index}
              > 
                {checkitem.name}
              </div>    
               
              </div>
            ))}
          </div>
          {console.log(filter)}
          <div className="filter-rightarea">
            {filter != null &&
               checkbox[filter].checkboxes.map((x, index) => {
                const category=checkbox[filter].name;
                const isChecked = selectedfilters[category]?.includes(x)||false;
                return(
                  <>
                  {
                    checkbox[filter]["subheading"]?<div className="subheading-filter">{checkbox[filter].subheading}</div>:""
                  }
                <div key={index} className="checkbox-main">
                  
                  <div className="checkbox-inner">
                    <div className="checkbox-content">
                        <div className="checkbox-area" onClick={()=>handleTick(category,x)}>
                      <img style={{width:"17.5px"}}  src={isChecked?"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png":"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"}/>
                        </div>
                        {
                         checkbox[filter]["number-checkbox"]===true?<div className="checkbox-value">Rs. {x[0]} - Rs. {x[1]}</div>:<div className="checkbox-value">{x}</div>
                        } 
                    </div> 
                    
                    </div>      
                </div>
                </>
);})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSelection;
