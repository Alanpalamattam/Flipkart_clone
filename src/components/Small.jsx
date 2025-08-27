import React from 'react'
import Header from '../components/Header/Header'
import Searchbar from './Header/Searchbar'
import Smallslider from './slidercomponent/Smallslider'
import {slides,lapslides} from "../components/slidercomponent/Slidercontent.json"
import Firstscroolitems from './Homepageitems/Firstscroolitems'
import Categoryslider from './slidercomponent/Categoryslider'
import Newlaunchitems from '../components/Homepageitems/Newlaunchitems'
import Lapmainslider from './slidercomponent/Lapmainslider'
import './styles/index.css'
import Festivalscroll from './Homepageitems/Festivalscroll'
 const Small = () => {
  return (
    <div className='Mainbody'>
    <Header/> 
    <Searchbar/>
    
    <Smallslider data={slides}/>
    <Firstscroolitems/>
     <div className="bodymainwrap" style={{width:"100%",justifyContent:"center"}}>
      <div className='bodypart'>
      <Categoryslider/>
       <Lapmainslider data={lapslides}/>
      </div>
    </div>
    <div className="bodyparttwo">
      <Festivalscroll/>
    </div>
   </div>
  ) 
}

export default Small 