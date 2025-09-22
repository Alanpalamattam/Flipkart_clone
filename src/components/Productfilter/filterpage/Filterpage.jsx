import React from "react";
import "../filter.css";
 import { Link } from "react-router-dom";
import "./productfilter.css";
import FilterSelection from "./FilterSelection";
import { useItems } from "../../../context/Filtercontext";
 const Filterpage = () => {
  const {allitems,setItems,sorttype,setSortType, selectedfilters,setselectedfilters,initialFilters} = useItems();
  const handleApply = () => {
    const filteredProducts = allitems.filter((product) => {
      const price = Number(product.org_price.replace(/,/g, ""));

      const brandOk =
        selectedfilters.Brand.length === 0 ||
        selectedfilters.Brand.includes(product.brand);
    
      const priceOk =  
        selectedfilters.Price.length === 0 ||
        selectedfilters.Price.some( 
          ([min, max]) => price >= min && price <= max
        );  
      
      const ratingOk =
        selectedfilters["Customer Ratings"].length === 0 ||
        Number(product.rating) >=
          Math.max(...selectedfilters["Customer Ratings"]);

      const discountOk =
        selectedfilters.Discount.length === 0 ||
        Number(product.ratingpercent) >=
          Math.max(
            ...selectedfilters.Discount.map((d) =>
              Number(d.replace("% or more", ""))  
            )
          );
        const screenOK=selectedfilters["Screen Resolution"].length===0 || selectedfilters["Screen Resolution"].includes(product.screenresolution)
        console.log(selectedfilters["Screen Resolution"])
      return brandOk && priceOk && ratingOk && discountOk && screenOK;
    });
    if (sorttype === "popularity") {
      filteredProducts.sort((a, b) => b.ratingpercent - a.ratingpercent);
    } else if (sorttype === "lowtohigh") {
      filteredProducts.sort(
        (a, b) =>
          Number(a.org_price.replace(/,/g, "")) -
          Number(b.org_price.replace(/,/g, ""))
      );
    } else if (sorttype === "hightolow") {
      filteredProducts.sort(
        (a, b) =>
          Number(b.org_price.replace(/,/g, "")) -
          Number(a.org_price.replace(/,/g, ""))
      );
    } else if (sorttype === "newest") {
      filteredProducts.sort((a, b) => a.id - b.id);
    }
    setItems(filteredProducts);
    console.log("apply", filteredProducts);
  };
  return (
    <div> 
      <div className="filtercontainer">
        <div className="filter-top">
          <div className="backbutton">
            <Link to="/monitors">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="filter-text">Filters</div>
          <div className="filter-text2" onClick={()=>setselectedfilters(initialFilters) & setSortType("popularity")}>Clear All</div>
        </div>
        <div>
          <FilterSelection />
        </div>
         <div className="filterbottom">
          <Link to={"/monitors"} className="filterbottom" style={{ textDecoration: "none" }}>
          <div className="filterbottom-flex">
            <div className="filterbottom-right">
              <div className="filterbottom-number">74</div>
              <div className="product-foundtxt">products found</div>
            </div>
            <div className="filerbottom-left">
              
                <div className="applybutton" onClick={handleApply}>
                  Apply
                </div>
             
            </div>
          </div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Filterpage;

