import React, { useEffect, useState } from "react";
import Headersection from "../headersection/Headersection";
import { products } from "../products.json";
import Productdetails from "./Productdetails";

const Sortparent = () => {
  const [sortType, setSortType] = useState("popularity");
  const [productss, setProducts] = useState(products);

  useEffect(() => {
    let sorted = [...products]; 
    if (sortType === "popularity") {
      sorted.sort((a, b) => b.ratingpercent - a.ratingpercent);
    } else if (sortType === "lowtohigh") {
      sorted.sort((a, b) => Number(a.org_price.replace(/,/g, "")) - Number(b.org_price.replace(/,/g,"")));
      console.log(sorted)
    } else if (sortType === "hightolow") {
      sorted.sort((a, b) => Number(b.org_price.replace(/,/g, "")) - Number(a.org_price.replace(/,/g, "")));
    }
    else if(sortType==="newest"){
        sorted.sort((a,b)=>a.id-b.id)
    }
    setProducts(sorted); 
    console.log(sorted)  
  }, [sortType]);

  return (
    <div>
      <Headersection sortType={sortType} onSortChange={setSortType} />
      <Productdetails products={productss} />
    </div>
  );
};

export default Sortparent;
