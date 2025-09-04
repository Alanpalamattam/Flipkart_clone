import React from 'react'
import "./Filterlarge.css"
const Monitorheaderlarge = () => {
  return (
    <div>
      <div className='headerlarge'>
       <div className="largeheader_flex">
       <div style={{height:"100%",minWidth:"124px"}}></div>
       <div className="Largeheader-contents">
        <div className="logosection-large">
          <div className="logosection-wrap">
            <a href="/"><img width="75" style={{display:"block"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart"/></a>
            <a className='explore_sec'>
              Explore
              <span className='plus_text'>Plus</span>
              <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"/>
            </a>
          </div>
        </div>
        <div className="searchbar_large">
          <form className='searchbar_large_wrap'>
            <div className="searchbar_flexarea">
            <div className="searchbar_content">
              <input className='seactchbar_text' type="text" placeholder='Search for products, brands and more' />
            </div>
            <button className='searchbar_searchbtn'>  
              <svg width="20" height="20" viewBox="0 0 17 18" class xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
            </button>
            </div>
          </form>   
        </div>  
        <div className="large_login">
          <div className="login_flex">
            <div className="login_text">
              <div><a href="">Login</a></div>
            </div>
        </div>
       </div> 
       <div className="becameseller_large">
        <a href="" className="became_seller">
          <span>Become a Seller</span>
        </a>
       </div>   
          
       </div>
    </div>
    </div>
    </div>
  );   
}

export default Monitorheaderlarge
