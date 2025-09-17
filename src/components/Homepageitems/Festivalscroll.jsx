import React from 'react'
import "./festival.css"
import {festivalitems1,festivalitems2,festivalitems3,festivalitems4} from "./items.json"
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
      <div className="festivaladdwrapper">
        <div className="festivalinnerwrap3">
          
            <div className="festivalflexarea">
                <div className="festivaltoparea">
                    <div className="festivalheading" style={{color:"white"}}>
                        Curtain raiser deals
                    </div>
                </div>
                <div className="festivalbottomarea">
                  <div className="festivalimagecontainer3">
                    {
                      festivalitems3.map((item,index)=>{
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
        <div className="festivalinnerwrap4">
          
            <div className="festivalflexarea">
                <div className="festivaltoparea">
                    <div className="festivalheading">
                        Tyohaar trends
                    </div>
                </div>
                <div className="festivalbottomarea">
                  <div className="festivalimagecontainer4">
                    {
                      festivalitems4.map((item,index)=>{
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