import React, { useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
 
const IProduct_largescreen_body = () => {
   const { id } = useParams();
   const [products,setProducts]=useState([])
    useEffect(() => {
  fetch("/products.json")
    .then((res) => res.json())
    .then((data) => setProducts(data.products))
    .catch((err) => console.error("Error loading products:", err));
}, []);
  const product = products.find((p) => p.id.toString() === id);
   const [mainimage,setmainimage]=useState("")
   const [index,setindex]=useState(0)
  useEffect(() => {
  if (product) {
    setmainimage(product.src2);
  }
}, [product]);
 if (!product) {
    return <p>Loading product...</p>; 
  } 
   console.log("is",product)
        const imagearray=[product.src2,"https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/1/k/o/-original-imahbzhctzaqjpfy.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/d/s/-original-imahbzhcntnyaygh.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/6/k/l/-original-imahbzhcj8fzrzcf.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/k/j/b/-original-imahbzhcfxpusfnk.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/i/j/w/-original-imahbzhchfgyq7ey.jpeg?q=70&crop=false","https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/j/b/c/-original-imahbzhcgwdhaz38.jpeg?q=70&crop=false"]
     const routearray=["Home","Computers","Computer Components","Monitors & Accessories","Monitors","Acer Monitors"]
  return (
     <>
    <div className='ip-body-wrap'>
       <div className="ip-large-screen-outer">
        <div className="ip-image-area">
            <div className="il-img-section">
                <div className="il-img-flex-area">
                    <div className="il-img-list-area">
                        <ul className="il-img-ul" >
                        {
                            imagearray.map((x,i)=>
                              <li className='il-img-li' key={i} onClick={()=>setmainimage(x) & setindex(i)}>
                                <div className="il-img-wrap" style={{ border:index==i?"2px solid #2874f0":""}}>
                                  <div className="il-img-outer">
                                    <img src={x} className='il-img' alt="" />
                                  </div>
                                </div>
                            </li>
                            )
                          }
                            
                    
                        </ul>
                    </div>
                    <div className="il-img-display-area">
                        <div className="il-img-display-wrap">
                            <img className='il-img-main' src={mainimage} alt="" />
                         </div>

                    </div> 
                </div>
                <div className="il-product-heart-button">
                    <div className="il-product-heart-wrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                        </div>
                </div>
            </div>
            <div className="il-addtocart-buynow-section">
             <div className="il-addtocart-buynow-wrap">
               <ul className="il-cartby-ul">
               <li className="il-addtocart">
                <button className="il-addtocart-button">
                    <svg className='il-addtocart-icon' width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                    ADD TO CART
                </button>
               </li>
               <li className="il-buynow">
                <button className="il-buynow-button">
                   <span className="il-buynow-flash">
                    </span> 
                    BUY NOW
                </button>
               </li>
               </ul>
             </div>
            </div>
        </div>
        <div className="il-product-details-area">
           <div className="il-product-details-route-area">
            <div className="il-route-section">
                {
                    routearray.map((x,i)=>
                      <div className="il-route-home-section" key={i}>
               <a href="/" className='il-route-text'>{x}</a>
               <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className='il-home-arrow'><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787"></path></svg>
             </div>
                    )
                }
                     
            </div> 

           <div className="il-share-button">                       
           </div> 
         </div>
         <div className="il-product-heading-area">
            <div className="il-product-heading-content">
                <h1 className='il-product-name'>{product.name}</h1>
            </div>
            <div className="il-product-rating-ara">
                <div className="il-product-rating-area">
                        <div className="il-product-rating-outer-wrap">
                            <span className="rating-star-area">
                                <div className="rating-star-content">
                                    {product.rating}
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className='rating-star-large'/>
                                </div>
                            </span>
                            <span className="rating-reviews-section" style={{letterSpacing:"0.2px"}}>
                                 {product.purchasecount} Ratings&nbsp;&&nbsp;143 Reviews
                            </span>
                        </div>
                </div>
                <div className="il-product-f-assured-logo">
                    <img className='il-f-assured' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="" />
                </div>
            </div>
            <div className="il-product-special-price-section">
                <span>Special price</span>
            </div>
            <div className="il-product-price-section">
                <div className="il-product-price-off-section">
                    <div className="il-product-org-price">
                        ₹{product.org_price}
                    </div>
                    <div className="il-product-cutt-price">
                        ₹{product.linedprice}
                    </div>
                    <div className="il-product-off-percent-section">
                        <span>{product.ratingpercent}% off</span>
                    </div>
                </div>
                <div className="il-product-price-section-rightside">
                 <div className="il-productsection-i-section">
 
                
                  </div>
                </div>
              
            </div>
            <div className="il-product-price-description-section">
                <div className="il-product-price-description-firstrow">
                      <span>+ ₹29 Protect Promise Fee</span>
                      &nbsp;
                      <span className='il-price-learn-more'>Learn more</span>
                    </div>
                </div>
            <div className='il-product-price-description-second-row'>Secure delivery by 26 Sep, Friday</div>
           
          </div>  
           <div className="il-product-available-offers-section">
              <div className="il-available-offers-heading">
                Available offers
              </div>
              <div className="il-available-offers-section-body">
                <span className='il-available-offer-item' style={{marginTop:"13px"}}>
                   <img className='il-available-offer-tag-image' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> 
                   <span className='i-avalable-offer-bank-offer-text'>Bank Offer</span>
                   <span className='i-avilable-offer-text'>10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250.</span>
                   <span className='i-available-offers-tc-text'>T&C</span>
                </span>
                <span className='il-available-offer-item'>
                   <img className='il-available-offer-tag-image' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> 
                   <span className='i-avalable-offer-bank-offer-text'>Bank Offer</span>
                   <span className='i-avilable-offer-text'>5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter.</span>
                   <span className='i-available-offers-tc-text'>T&C</span>
                </span>
                <span className='il-available-offer-item'>
                   <img className='il-available-offer-tag-image' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> 
                   <span className='i-avalable-offer-bank-offer-text'>Bank Offer</span>
                   <span className='i-avilable-offer-text'>5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter</span>
                   <span className='i-available-offers-tc-text'>T&C</span>
                </span>
                 <span className='il-available-offer-item'>
                   <img className='il-available-offer-tag-image' src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> 
                   <span className='i-avalable-offer-bank-offer-text'>Special Price</span>
                   <span className='i-avilable-offer-text'>Get extra 21% off (price inclusive of cashback/coupon)</span>
                   <span className='i-available-offers-tc-text'>T&C</span>
                </span>
              </div>
            </div>
        <div className="il-product-highlights-section">
         <div className="il-product-highlights-outer">
            <div className="il-product-highlights-content">
              <div className="il-product-highlight-text">Highlights</div>
              <div className="il-product-highlights-listing-area">
                <ul>
                  {product.features.map((x,i)=>
                                      <li className='il-product-highlights-li' key={i}>{x}</li>

                  )}
                     
                </ul>
              </div>
            </div>
         </div>
         <div className="il-product-highlights-outer">
            <div className="il-product-highlights-content">
              <div className="il-product-highlight-text">Easy Payment Options</div>
              <div className="il-product-highlights-listing-area" style={{marginTop:"-36px"}}>
                <ul>
                    <li className='il-product-highlights-li'>No cost EMI starting from ₹2,100/month</li>
                    <li className='il-product-highlights-li'>Cash on Delivery</li>
                    <li className='il-product-highlights-li'>Net banking & Credit/ Debit/ ATM card</li>
                </ul>   

              </div>
            </div>
         </div>
        </div>
        <div className="il-product-descriptionl-main">
            <div className="il-description-headingl">
                <div className='il-description-heading-contentl'>Product Description</div>
            </div>
            <div >
              <div className="il-product-description-area1">
                  <div className="il-description-subheading">
                    Stunning Vibrant Images
                  </div>
                  <div className="il-description-paragraph-section">
                    <p>
                      At the heart of Full HD resolution, offering an immersive visual experience with a crisp 1920x1080 display. Enjoy true-to-life colors that pop and bring detail to every image, whether you’re gaming, editing, or watching a film. This monitor delivers dynamic contrast and sharpness, allowing even the smallest text and intricate details to stand out with precision. Say goodbye to pixelated visuals—your content will always look its best in Full HD.
                    </p>
                    <div className="li-image-sectionl">
                    <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/96ef7d4099b14a1a98414a3824bec40a_192fffad2ae_3.jpg.jpeg?q=90" alt="" />
                  </div>
                  </div>            
              </div>
              <div className="il-product-description-area1" >
                  
                  <div className="il-description-paragraph-section" style={{flexDirection:"row-reverse",marginTop:"0px"}}>
                    <div className="il-description-subheading">
                   ZeroFrame Design for Maximum Immersion
                   <p  className="il-description-paragraphp">
                      This Monitor is built with a ZeroFrame design, pushing the boundaries of minimalism to maximize your viewing area. Its near bezel-less edges eliminate distractions, giving you a wider and more immersive screen space. Whether you’re working on a multi-monitor setup or simply want a clean, uninterrupted view, the ZeroFrame design creates a seamless experience that feels boundless. Place multiple monitors side-by-side for a panoramic, edge-to-edge display that feels as though it has no limits.                    </p>
                  </div>
                    
                    <div className="li-image-sectionl" style={{paddingLeft:"0px",paddingRight:"32px"}}>
                    <img src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/edcb602550614e618b1d1a5f159f58ad_192fffad6ab_2.jpg.jpeg?q=90" alt="" />
                  </div>
                  </div>            
              </div>
            </div>
        </div>
         </div> 
       
       </div>
        
    </div> 
    
   </>
  )
}

export default IProduct_largescreen_body
