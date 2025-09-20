import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
 import Footerr from "../../../components/Footerr"
const IBodysection = () => {
    const { id } = useParams();
    const [products,setProducts]=useState([]);
    console.log("object",products)
    useEffect(() => {
      fetch("/products.json")
        .then((res) => res.json())                      
        .then((data) => setProducts(data.products))
        .catch((err) => console.error("Error loading products:", err));
    }, []);
const product = products.find((p) => p.id.toString() === id);

  console.log("isdd",product)
     const dots = [1,2, 3, 4, 5];
       if (!product) {
    return <p>Loading product...</p>;
  }
      const imagearray=[product.src2,"https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/1/k/o/-original-imahbzhctzaqjpfy.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/d/s/-original-imahbzhcntnyaygh.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/6/k/l/-original-imahbzhcj8fzrzcf.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/k/j/b/-original-imahbzhcfxpusfnk.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/i/j/w/-original-imahbzhchfgyq7ey.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/j/b/c/-original-imahbzhcgwdhaz38.jpeg?q=70&crop=false"]
      
     const feature=[   
      {
        "img":"https://rukminim2.flixcart.com/image/xif0q/internalised/original-display_size.png?q=60",
        "heading":"Display Size",
        "firsttext":product.display_size,
        "secondtext":"Get lost in the visuals"
      },
      {
        "img":"https://rukminim2.flixcart.com/image/xif0q/internalised/original-panel_type.png?q=60",
        "heading":"Panel",
        "firsttext":"IPS Panel",
        "secondtext":"Vivid colors, wider angles."
      },
      {
        "img":"https://rukminim2.flixcart.com/image/xif0q/internalised/original-screen_resolution_type.png?q=60",
        "heading":"Resolution",
        "firsttext":product.screenresolution,
        "secondtext":"Crystal clear visuals for immersive experience"
      },
      {
        "img":"https://rukminim2.flixcart.com/image/xif0q/internalised/original-maximum_2d_refresh_rate_digital.png?q=60",
        "heading":"2D Refresh Rate",
        "firsttext":product.refreshrate+" Hz",
        "secondtext":"Immersive visuals for gaming and entertainment"
      },
      {
        "img":"https://rukminim2.flixcart.com/image/xif0q/internalised/original-response_time.png?q=60",
        "heading":"Response Time",
        "firsttext":product.responsetime+" ms",
        "secondtext":"Quick and seamless display"
      }
    ]
  return (
    <>
    <div className='i-body-main'>
      <div className="i-body-wrapper">
        <div className="i-adsection">
            <div style={{width:"100%"}}>
                <div className="i-ad-content">
                   <div className="i-ad-leftsection">
                    <div className="i-ad-left-image-area">
                        <img src="https://rukminim1.flixcart.com/image/80/80/xif0q/monitor/t/f/b/16-1-fhd-1080p-portable-monitor-kickstand-portable-laptop-original-imahbvgkdunhxh5e.jpeg?q=60" alt="" />
                    </div>
                    <div className="i-ad-item-name-area">
                      <div className="i-ad-item-name">
                        Arzopa Z1C 40.89 cm (16 inch) Full HD IPS Panel Monitor (16.1'' FHD 1080P Portable Monitor, Kickstand Portable Laptop Monitor
                      </div>
                      <div className="i-ad-item-name-row2">
                         <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                          <path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008b37ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                         </svg>
                         <div className="i-ad-discount-percent">
                          64%
                         </div>
                         <div className="i-ad-cutted-price">35999</div>
                         <div className="i-ad-original-price">₹12990</div>
                      </div>
                    </div>
                    </div>  
                    <div className="i-ad-rightsection">
                      <div className="i-ad-ad-text">
                        <span>AD</span>
                      </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="i-main-image-section">
          <div className="i-image-wrapp"> 
            {
              imagearray.map((x,i)=>
                 <div className="i-image-area" key={i}>
              <picture>
                <img className='i-image-container' src={x} alt="" />
              </picture>
            </div>
              )
            }
          </div>
          <div className="i-image-heart-container">
            <div className="i-image-heart-button">
              <div className="i-image-heart-button-container">
                <img src="/heartplusi.svg" alt="" />
              </div>
            </div> 
             <div className="i-image-arrow-container">
            <img src="/iarrow.svg" alt="" />
          </div> 
          </div> 
          <div className="i-image-down-over-items">
            <div className="i-image-down-over-item-rating">
             {product.rating}
            </div>
            <svg width="14" height="14" viewBox="0 0 12 12"> 
              <path d="M5.99953 8.86357L8.56453 10.4409C8.63108 10.4813 8.70812 10.5011 8.7859 10.4977C8.86368 10.4943 8.93871 10.468 9.00152 10.422C9.06433 10.376 9.11209 10.3124 9.13877 10.2393C9.16545 10.1661 9.16985 10.0867 9.15141 10.0111L8.45391 7.06779L10.7367 5.09904C10.7949 5.04793 10.8369 4.9809 10.8574 4.90621C10.878 4.83153 10.8762 4.75247 10.8523 4.67878C10.8284 4.6051 10.7835 4.54002 10.7231 4.49159C10.6626 4.44315 10.5893 4.41347 10.5122 4.40622L7.51641 4.16247L6.36234 1.36872C6.33292 1.29665 6.2827 1.23497 6.21808 1.19155C6.15347 1.14813 6.07738 1.12495 5.99953 1.12495C5.92168 1.12495 5.8456 1.14813 5.78098 1.19155C5.71636 1.23497 5.66614 1.29665 5.63672 1.36872L4.48266 4.16247L1.48688 4.40622C1.40924 4.41304 1.33532 4.44259 1.27438 4.49117C1.21343 4.53975 1.16815 4.60521 1.1442 4.67938C1.12024 4.75355 1.11867 4.83313 1.13968 4.90818C1.1607 4.98324 1.20336 5.05043 1.26235 5.10138L3.54516 7.07013L2.84766 10.0111C2.82922 10.0867 2.83361 10.1661 2.86029 10.2393C2.88697 10.3124 2.93473 10.376 2.99754 10.422C3.06035 10.468 3.13539 10.4943 3.21317 10.4977C3.29095 10.5011 3.36798 10.4813 3.43453 10.4409L5.99953 8.86357Z" fill="#008b37ff"></path>
            </svg>
            <div className="i-image-rating-count">| 1.1K+</div>
          </div> 
         
        </div>
        <div className="i-image-blue-dot-section">
          <div className="i-image-dot-inner-wrap">
            <div className="i-image-blue-content">
               <div className="i-blue-dot">
                <svg  width="8" height="8" viewBox="0 0 9 9" fill="none"> 
                  <circle cx="4.98926" cy="4.5" r="4" fill="#e0e0e0ff"></circle>
                </svg>
              </div>
              { dots.map((dot, i) => 
              <div className="i-blue-dot" key={i} style={{transform: `scale(${1 - i * 0.1})`,}} >
                <svg  width="8" height="8" viewBox="0 0 9 9" fill="none"> 
                  <circle cx="4.98926" cy="4.5" r="4" fill="#e0e0e0ff"></circle>
                </svg>
              </div>
               )}
            </div>
          </div> 
        </div>
        <div className="i-product-name-brand-section">
          <div className="i-product-name-brand-outer-wrap">
            <div className="i-product-brand-area">
              <div className="i-product-brand-name">
                {product.brand}
              </div>
              <div className="i-product-visit-store-text">
                Visit store
              </div>
            </div>
            <div className="i-product-name-area">
              <div className="i-product-name-content">
                {product.name}
                 <span className='i-more-text'>
               more
              </span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="i-product-price-area">
          <div className="i-product-price-content">
            <div className="i-product-price-section-row1">
              <div className="i-product-price-discount-section">
                <svg width="17" height="17" fill="none" viewBox="0 0 12 12"> 
                  <path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008b37ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div className="i-product-price-discound">
                  {product.ratingpercent}%
                </div>
              </div>
              <div className="i-product-cutted-price">
                <div className="i-product-cut-price-container">
                  {product.linedprice}
                </div>
              </div>
              <div className="i-product-org-price-section">
                <div className="i-product-org-price">₹{product.org_price}</div>
              </div>
            </div>
            <div className="i-price-section-row2">
              <div className="i-product-price-row2-item1">+₹29 Protect Promise Fee</div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"> 
                <path d="M10 7L15 12L10 17" stroke="#707070ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="i-product-bankoffer-emi-card-section">
          <div className="i-product-bankoffer-content-area">
            <div className="i-product-bank-top-part">
              <div className="i-product-bank-top-main-wrap">
                <div className="i-product-bank-offer-content-area">
                   <img src="/wowdeall.svg" alt="" />
                   <div className="i-product-bank-offer-row1-text">
                    <div className="i-product-bank-offer-row1-contentarea">
                      Apply offers for maximum savings
                    </div>
                   </div>
                   <div className="i-product-offer-row1-text2"></div>
                   <div className="i-product-bank-offer-up-arrow"><svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d="M14.75 6L9.125 11.5L3.5 6" stroke="#FFFFFF" stroke-width="1.6px" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg></div>
                </div>
               </div>
            </div>
            <div className="i-product-bank-offer-bottomm-part-main">
              <div className="i-product-bank-offer-bottom-wrap">
               <div className="i-product-bank-offer-curved-image">
                <svg width="344" height="115" viewBox="0 0 330 115" fill="none" preserveAspectRatio="none" className='curver-banner'  ><path d="M329 81V19" stroke="#CFEBFE" fill="none"></path><path d="M329.5 19C329.167 19 328.833 19 328.5 19C328.508 18.4851 328.517 17.9702 328.525 17.4554C328.526 17.3842 328.527 17.313 328.528 17.2418C328.886 8.89806 321.347 1.11039 312.761 1.30446C312.022 1.30358 311.284 1.30271 310.545 1.30183C310.03 1.30122 309.515 1.30061 309 1.3C309.515 1.28395 310.029 1.26789 310.544 1.25184C311.282 1.22881 312.021 1.20577 312.759 1.18274C321.384 0.689746 329.543 8.36684 329.472 17.2418C329.473 17.313 329.474 17.3842 329.475 17.4554C329.483 17.9702 329.492 18.4851 329.5 19Z" fill="#CFEBFE"></path><path d="M1 16.9495V114.032L329 114V79C329 70.1634 321.837 63 313 63H163C154.163 63 147 55.8366 147 47V17C147 8.16344 139.837 1 131 1H17C8.16344 1 1 8.11295 1 16.9495Z" fill="#CFEBFE" stroke="#8DC9FD"></path></svg>
                <div className="i-product-bank-offer-curved-image-bottom">
                </div>
               </div>
               <div className="i-product-bank-offer-bottom-price-section">
                <div className="i-product-bo-flex-area">
                  <div className="i-product-bo-price-wrap">
                     <div className="i-product-bo-price-content">
                      <div className="i-product-bo-org-price-content">
                        ₹{product.org_price}
                      </div>
                      <div className="i-product-bo-lowest-price-content">
                        Lowest price for you
                      </div>
                     </div>
                  </div>   
                  <div className="i-product-bo-or-text-flex-area">
                    <div className="i-product-bo-or-text-content">OR</div>
                  </div>
                  <div className="i-product-bo-price-wrap">
                     <div className="i-product-bo-price-content-r">
                      <div className="i-product-bo-org-price-content">
                        ₹283 x 24m
                      </div>
                      <div className="i-product-bo-lowest-price-content">
                        Pay ₹{product.org_price}
                      </div>
                     </div>
                  </div>
                </div>    
               </div>
               <div className="i-product-bank-exchange-section">
                <div className="i-product-bank-exchange-section-top">
                  <div className="i-product-bank-exchange-outer-wrap">
                    <div className="i-product-bank-exchange-content">
                      <div className="i-product-bank-exchange-row1">
                        <div className="i-product-bank-exchange-row1-exchange-content">
                          Exchange offer
                        </div>
                      </div>
                      <div className="i-exchange-bank-exchange-row2">
                        <div className="i-exchange-bank-exchange-row2-flexarea">
                          <div className="i-bank-exchange-button">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.5195 9.81201H5.70703" stroke="#333333ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.60286 8.47852L6.14453 8.93685L5.26953 9.81185L6.60286 11.1452" stroke="#333333ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.47754 6.31201H10.29" stroke="#333333ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.26921 4.85352L10.7275 6.31185L9.26921 7.77018" stroke="#333333ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          </div>
                          <div className="i-bank-exchange-row2-right-side">
                            <div className="i-bank-exchange-row2-right-side-first-text">
                              <div className="i-bank-exchange-row2-right-side-first-content">
                                Up to ₹400
                              </div>
                            </div>
                            <div className="i-bank-exchange-row2-right-side-first-text">
                              <div className="i-bank-exchange-row2-seconf-text-second-content">
                                Select a product to exchange
                              </div>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 7L15 12L10 17" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                          </div> 
                        </div>
                      </div>
                      <div className="i-exchange-apply-button">
                        <div className="i-exchange-apply-content">
                          Apply
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
              </div>
            </div> 
          </div>
        </div>
        <div className="i-product-highlights-section">
         <div className="i-highlights-top-section">
          <div className="i-highlights-section-text">
            Highlights
          </div>
         </div>
         <div className="i-highlights-bottom-section">
          {
           feature.map((p,i)=>
          <div className="i-highlight-feature-area" key={i}>
            <div className="i-highlight-feature-img">
              <img src={p.img}  alt="" />
            </div>
            <div className="i-display-feature-description-area">
              <div className="i-display-feature-heading">
                {p.heading}
              </div>
              <div className="i-display-feature-text1">
               {p.firsttext}
              </div>
              <div className="i-display-feature-text2">
                {p.secondtext}
              </div>
            </div>
          </div>
          )
          }
          
           
         </div>
        </div>
      </div>
      <Footerr/>
    </div>
    <div className="i-buynow-footer-area">
      <div className="i-buynow-flex-wrap">
        <div className="i-footer-cart-button">
          <img src="/addtocart-bootm.svg" alt="" />
        </div>
        <div className="i-buy-now-rightarea">
          <div className="i-buy-now-emi-area">
            <div className='i-buy-now-outer'>
              <div className="i-buy-now-emi-wrap">
   
                <div className="i-buy-emi-text1">Buy with EMI</div>
                <div className="i-buy-emi-text2"><span>From ₹314/m</span></div>
                </div>
          
            </div>
          </div> 
          <div className="i-buy-now-emi-area">
            <div className='i-buy-now-outer'> 
              <div className="i-buy-now-wrap">
                <div className="i-buy-now-text1">Buy now</div>  
                <div className="i-buy-now-text2"><span>at&nbsp;&nbsp;₹{product.org_price} </span></div>
               </div>
            </div>  
          </div>
        </div>
      </div>  
    </div>
    </>
   )
}

    
export default IBodysection; 