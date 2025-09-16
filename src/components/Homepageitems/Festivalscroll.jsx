import React from 'react'
import "./festival.css"
import {festivalitems1,festivalitems2} from "./items.json"
 const Festivalscroll = () => {
  return (
    <div>  
      <div className="festivaladdwrapper">
        <div className="festivalinnerwrap">
          
            <div className="festivalflexarea">
                <div className="festivaltoparea">
                    <div className="festivalheading">
                        Ganpati must-haves
                    </div>
                </div>
                <div className="festivalbottomarea">
                  <div className="festivalimagecontainer">
                    {
                      festivalitems1.map((item,index)=>{
                        return(
                           <a href="" className='imagecontainer'>
                      <img key={index} src={item.src} alt={item.alt}  srcset={item.src}/>
                    </a>
                        )
                      })
                    }
                  </div>
                </div> 
            </div>
        </div>     
      </div>
      <div className="festivaladdwrapper">
        <div className="festivalinnerwrap2">
          
            <div className="festivalflexarea">
                <div className="festivaltoparea">
                    <div className="festivalheading">
                        Tyohaar trends
                    </div>
                </div>
                <div className="festivalbottomarea">
                  <div className="festivalimagecontainer2">
                    {
                      festivalitems2.map((item,index)=>{
                        return(
                           <a href="" className='imagecontainer'>
                      <img key={index} src={item.src} alt={item.alt}  srcset={item.src}/>
                    </a>
                        )
                      })
                    }
                  </div>
                </div> 
            </div>            
        </div>     
      </div>
    </div> 
  )
} 

export default Festivalscroll  