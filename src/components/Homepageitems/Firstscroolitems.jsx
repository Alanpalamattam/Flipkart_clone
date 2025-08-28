import React from 'react'
import "./items.css";
import {row1,row2} from './items.json';
import Newlaunchitems from './Newlaunchitems';
import {Link} from "react-router-dom";
const Firstscroolitems = () => {
 
  return ( 
    <>
    <div className="itemmain">
      <div className="itemwrapper">
        <div className="flexitems">
            <div className="itemfirstrow">
                  {row1.map((p,index)=>
                    <div key={index} className='itemcontent'>
                        <div className="imagediv">
                          <Link to={"/monitors"}><img src={p.src} alt="nothing"/>  </Link>
                            
                        </div>
                        <div className="itemname">
                          {p.name}
                        </div>
                        
                    </div>
                  )
                  
                }
            </div>
            <div className="itemsecondrow">
              {row2.map((p,index)=>
                    <div key={index} className='itemcontent'>
                        <div className="imagediv">
                            <Link to={"/monitors"}><img src={p.src} alt="nothing"/></Link>  
                        </div>
                        <div className="itemname">
                          {p.name}
                        </div>
                    </div> 
                )
                }
            </div>    
        </div>
       </div>    
    </div>
     <Newlaunchitems/>
    </> 
  )   
} 

export default Firstscroolitems
 