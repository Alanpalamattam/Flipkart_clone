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
  "Screen Form Factor":[],
  "Inbuilt Speaker":[],
  "Panel Type":[],
  Connectivity:[],
  "Suitable For":[],
  "Response Time":[],
  "GST Invoice Available":[],
  "Refresh Rate":[],
  "Availability":[],
  "Category":[], 
};
const ItemsContext = createContext();  
  export const ItemsProvider = ({ children }) => { 
   const [items, setItems] = useState([]); 
   const [sorttype,setSortType]=useState("popularity")
   const [allitems,setallitems]=useState([])
  useEffect(()=>{
   const fetchproducts=async()=>{
      try{
           const res=await fetch("/products.json");  
           const data=await res.json();
            setItems(data.products);

           setallitems(data.products);
      }catch (err) {
         console.log("Error fetching JSON:", err);
      } finally{
        console.log("");    
      }
    }      
    fetchproducts();   
  },[]);
    const [selectedfilters, setselectedfilters] = useState(initialFilters);
  
   return (
    <ItemsContext.Provider value={{ sorttype,setSortType,allitems,items,initialFilters,selectedfilters,setselectedfilters,setItems }}>
      {children}
    </ItemsContext.Provider>
  );  
}; 
 // eslint-disable-next-line react-refresh/only-export-components
 export const useItems = () => useContext(ItemsContext);
 