import React from 'react'
import { useItems } from "../../../../context/Filtercontext";

const Product_map_large = () => {
      const { items} = useItems();
   return (
  <div>   
  {
    items.map((p,index)=>
      
        <div className="p-large-display-main" key={index}>
            <div style={{width:"100%"}} >
             <div className="p-display-large-outer-wrap">
                <a href="" className="p-display-atag">
                    <div className="p-large-image-area">
                         <div className="p-large-image-wrap">
                            <img src={p.src} alt="" className="p-large-img" />
                        </div>
                          <div className="fav-button-p-large">
                            <div className="fav-button-flex-area"><svg xmlns="http://www.w3.org/2000/svg"   width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg></div>
                        </div>
                    </div>
                    <div className="p-details-area-large">
                        <div className="p-name-description-area">
                          <div className="p-name-large">
                            {p.name}
                          </div>
                          <div className="rating-area-large">
                            <span className="rating-star-area">
                                <div className="rating-star-content">
                                    {p.rating}
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className='rating-star-large'/>
                                </div>
                            </span>
                            <span className="rating-reviews-section">
                                {p.purchasecount}&nbsp;&&nbsp;143 Reviews
                            </span>
                          </div>
                          <div className="pl-features-list">
                              <ul className="pl-feature-ul">
                                {p["features"].map((feature,i)=>
                                 <li className="pl-feature-li" key={i}>
                                    {feature}
                                </li>
                                )}
                              </ul> 
                          </div>
                        </div>
                        <div className="p-price-details-area">
                           <div className="p-price-main-wrap">
                            <div>
                                <div className="pl-org-price">
                                    ₹{p.org_price}
                                </div>
                                <div className="pl-cutted-price">
                                    ₹{p.linedprice}
                                </div>
                                <div className="pl-offer-percentage">
                                    <span>{p.ratingpercent}% off</span>
                                </div>
                            </div>
                           </div>
                           <div className="p-fassured-area-l">
                            <img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"/>
                           </div>
                           <div className="p-exchange-area">
                            <div style={{display:"inline-block"}}>
                                <div className="p-exchange-text1">
                                    Upto
                                </div>
                                <div className="p-exchange-text2">
                                     ₹220
                                </div>
                                <div className="p-exchange-text1">
                                    Off on Exchange
                                </div>
                            </div>
                           </div>
                           <div className="pl-bankoffer">
                            Bank Offer
                           </div>
                        </div> 
                    </div>
                </a>  
             </div>
            </div>
        </div>
    )
  }
    
      
    </div>
  );
}

export default Product_map_large
