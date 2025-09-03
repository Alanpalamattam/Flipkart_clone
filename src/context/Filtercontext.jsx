import { createContext, useContext, useState,useEffect} from "react";
 // Create Context
const ItemsContext = createContext();
 
// Provider
export const ItemsProvider = ({ children }) => {
     useEffect(()=>{
   const fetchproducts=async()=>{
      try{
           const res=await fetch("/public/products.json");
           const data=await res.json();
           setItems(data.products);
      }catch (err) {
        console.log("Error fetching JSON:", err);
      } finally{
        console.log("")
      }
    }   
    fetchproducts(); 
  },[]);
  const [items, setItems] = useState([]);
    const [selectedfilters, setselectedfilters] = useState({});
  
   return (
    <ItemsContext.Provider value={{ items, selectedfilters,setselectedfilters,setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

// Custom hook for easy usage
export const useItems = () => useContext(ItemsContext);

   