import { createContext, useContext, useState,useEffect} from "react";
 
 const initialFilters = {
  Brand: [],
  Price: [],
  Size: [],
  "FAssured": [],
  "Customer Ratings":[],
  Offers:[],
  Discount:[],
  "Display Size":[],
  "Screen Resolution":[],
  
};    
const ItemsContext = createContext();
 
 export const ItemsProvider = ({ children }) => {
   const [items, setItems] = useState([]);
   const [allitems,setallitems]=useState([])

     useEffect(()=>{
   const fetchproducts=async()=>{
      try{
           const res=await fetch("/public/products.json");
           const data=await res.json();
           setItems(data.products);
           setallitems(data.products);
      }catch (err) {
        console.log("Error fetching JSON:", err);
      } finally{
        console.log("")
      } 
    }   
    fetchproducts(); 
  },[]);
    const [selectedfilters, setselectedfilters] = useState(initialFilters);
  
   return (
    <ItemsContext.Provider value={{ allitems,items, selectedfilters,setselectedfilters,setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

// Custom hook for easy usage
export const useItems = () => useContext(ItemsContext);

   