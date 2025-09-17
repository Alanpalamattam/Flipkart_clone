import React from 'react'
import Header from './Header/Header'
import Searchbar from './Header/Searchbar'
import Smallslider from './slidercomponent/Smallslider'
import {slides,lapslides} from "./slidercomponent/Slidercontent.json"
import Firstscroolitems from './Homepageitems/Firstscroolitems'
import Categoryslider from './slidercomponent/Categoryslider'
import Newlaunchitems from './Homepageitems/Newlaunchitems'
import Lapmainslider from './slidercomponent/Lapmainslider'
import './styles/index.css'
import Festivalscroll from './Homepageitems/Festivalscroll'
import Bestinelectronics from './Laptopbbestcategory/Bestinelectronics'
import Footerr from './Footerr'
 const Homepage = () => {
  return (
    <div className='Mainbody'>
      <> 
      <Header/> 
    <Searchbar/>
    <Smallslider data={slides}/>
    <Firstscroolitems/>
     <div className="bodyparttwo">
      <Festivalscroll/>
       
    </div>
    <div className="bodymainwrap" style={{width:"100%",justifyContent:"center"}}>
      <div className='bodypart'>
      <Categoryslider/>
       <Lapmainslider data={lapslides}/>
        <Bestinelectronics/>
      </div>
    </div> 
    <Footerr/>
      </>
    
    
    
     
   
    
   </div>
  ) 
}

export default Homepage 