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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"> 
                  <path d="M21.196 11.4057C21.3096 11.1653 22.4159 8.76955 21.1429 6.31952C21.0141 6.06366 19.7866 3.7842 17.271 3.49733C15.2327 3.26473 13.1489 4.46649 11.9896 6.56762C10.5727 4.2649 8.16313 3.11742 6.02635 3.62138C4.3139 4.03231 3.0485 5.43565 2.54083 6.84674C1.22239 10.483 4.73822 14.5612 6.06424 16.0964C8.0722 18.4224 10.3226 19.7559 11.9821 20.5312C12.467 20.3064 12.9898 20.0273 13.5278 19.6784C13.846 19.4768 14.134 19.2675 14.4068 19.0659" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M18.0938 12V19.3125" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M14.4375 15.6562H21.75" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div> 
             <div className="i-image-arrow-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.125 13.875L15 9" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M20.9716 3.95434C21.0078 3.82605 21.0091 3.69044 20.9754 3.56147C20.9417 3.4325 20.8743 3.31484 20.78 3.22059C20.6858 3.12633 20.5681 3.0589 20.4392 3.02524C20.3102 2.99157 20.1746 2.99288 20.0463 3.02903L2.04629 8.48716C1.89934 8.52863 1.76854 8.61397 1.67139 8.73177C1.57424 8.84958 1.51536 8.99422 1.50262 9.14639C1.48988 9.29855 1.52388 9.45098 1.6001 9.58329C1.67631 9.71561 1.79109 9.82151 1.9291 9.88684L10.1257 13.875L14.1138 22.0706C14.1791 22.2086 14.285 22.3234 14.4173 22.3996C14.5497 22.4758 14.7021 22.5098 14.8542 22.4971C15.0064 22.4843 15.1511 22.4255 15.2689 22.3283C15.3867 22.2312 15.472 22.1004 15.5135 21.9534L20.9716 3.95434Z" stroke="#333333ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
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
                   <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <path d="M.977 19.286c.267.443.746.714 1.263.714h33.067c.688 0 1.283-.476 1.436-1.145a1300.66 1300.66 0 003.223-14.692 1.6 1.6 0 00-.105-.963c-.343-.795-.515-1.447-.891-2.11a89.51 89.51 0 00-20.442 1.022C12.123 3.178 6.468-.237 2.016 1.41 1.464 4.905.66 11.853.011 17.07c-.04.326.03.657.199.94l.767 1.279v-.002z" fill="#0A0A0A"></path><path d="M9.011 9.166c-.549 0-.915 0-1.21-.292-.297-.29-.305-.652-.318-1.199l-.019-1.16c-.222.521-.471 1.1-.75 1.74-.148.336-.255.582-.51.747-.256.166-.51.166-.893.166H4.28c-.542 0-.899 0-1.194-.284-.295-.284-.31-.64-.336-1.179l-.246-5.412c-.025-.585-.044-.972.259-1.287.3-.318.69-.318 1.274-.318h.44c.58 0 .964 0 1.265.31.302.306.291.692.278 1.278 0 0-.023 1.056-.024 1.2.259-.623.528-1.254.794-1.865.147-.34.252-.585.508-.752.255-.165.524-.165.894-.165h.585c.558 0 .926 0 1.225.29.3.294.303.662.314 1.22 0 0 .02 1.01.023 1.26.24-.619.483-1.231.716-1.81.148-.368.244-.613.503-.787.26-.177.52-.177.92-.177h.225c.83 0 1.381 0 1.68.481.303.481.062.973-.3 1.72L11.46 8.303c-.156.32-.269.553-.517.709-.248.156-.492.156-.865.156H9.011v-.002z" fill="#FFFFFF"></path>
                    <path d="M12.696 1.2c.733 0 1.098 0 1.25.241.15.241-.011.57-.33 1.23l-2.622 5.408c-.136.282-.205.42-.327.498-.124.08-.28.08-.592.08H9.01c-.47 0-.705 0-.853-.147-.149-.147-.154-.378-.164-.846a96.776 96.776 0 01-.01-3.678c0-.01-.009-.019-.016-.019-.008 0-.011.006-.015.01-.423 1.108-1.094 2.67-1.705 4.065-.13.297-.193.443-.321.526-.128.084-.29.084-.613.084h-1.03c-.462 0-.693 0-.842-.14-.146-.141-.157-.374-.178-.833L3.016 2.27c-.023-.5-.032-.753.118-.91.15-.155.4-.157.904-.157h.44c.498 0 .748 0 .9.154.15.154.145.406.132.91-.032 1.385-.045 2.92-.15 4.05 0 .01.007.018.014.018a.018.018 0 00.015-.01c.538-1.37 1.228-3.03 1.869-4.51.127-.297.191-.445.319-.528.128-.084.29-.084.615-.084h.584c.477 0 .716 0 .866.146.149.147.155.386.164.867.026 1.338.062 2.806.023 4.042 0 .01.007.02.018.02a.018.018 0 00.017-.012c.478-1.447 1.141-3.11 1.663-4.42.126-.313.188-.468.318-.555.13-.086.297-.086.633-.086h.226M12.696.178h-.225c-.42 0-.818 0-1.207.264-.285.193-.441.445-.567.72a1.358 1.358 0 00-.346-.546c-.447-.44-.974-.44-1.582-.44h-.585c-.408 0-.793 0-1.176.25-.297.194-.455.45-.585.726A1.39 1.39 0 006.1.635C5.65.173 5.104.173 4.47.173h-.44c-.612 0-1.189 0-1.642.475-.453.476-.426 1.053-.398 1.664l.248 5.408c.024.568.05 1.102.494 1.526.446.425.983.425 1.549.425h1.03c.407 0 .789 0 1.172-.25.31-.201.468-.47.604-.761.067.205.176.397.355.573.447.436.992.436 1.569.436h1.064c.39 0 .76 0 1.133-.235.374-.235.536-.567.707-.919l2.621-5.408c.387-.805.726-1.498.277-2.216C14.36.173 13.59.173 12.695.173v.005z" fill="#0A0A0A"></path>
                    <path d="M29.197 9.166c-.549 0-.913 0-1.21-.292-.3-.291-.305-.652-.318-1.195-.007-.389-.011-.776-.017-1.163-.222.52-.473 1.1-.752 1.738-.148.337-.255.583-.51.748-.256.166-.508.166-.892.166h-1.03c-.543 0-.9 0-1.193-.284-.297-.284-.312-.64-.338-1.179l-.244-5.412c-.027-.585-.044-.972.257-1.287.303-.318.69-.318 1.276-.318h.438c.58 0 .964 0 1.265.31.302.306.291.692.28 1.278 0 0-.025 1.056-.026 1.2.26-.623.528-1.255.794-1.865.145-.34.254-.585.508-.752.256-.165.524-.17.895-.17h.586c.556 0 .924 0 1.221.292.3.293.307.662.316 1.222l.023 1.257c.24-.618.483-1.231.714-1.81.148-.368.244-.613.505-.787.262-.177.521-.177.921-.177h.224c.83 0 1.383 0 1.682.481.3.481.06.974-.303 1.72l-2.623 5.412c-.156.322-.269.553-.517.709-.248.156-.492.156-.863.156h-1.069v.002z" fill="#FFFFFF"></path>
                    <path d="M32.882 1.2c.733 0 1.1 0 1.25.241.15.241-.011.57-.329 1.23l-2.621 5.408c-.138.282-.205.42-.33.498-.123.08-.28.08-.59.08h-1.061c-.47 0-.705 0-.853-.147-.149-.147-.154-.378-.164-.846a105.586 105.586 0 01-.011-3.678c0-.01-.008-.019-.015-.019a.018.018 0 00-.015.01c-.421 1.108-1.094 2.67-1.705 4.065-.13.297-.193.443-.321.526-.128.084-.29.084-.615.084h-1.03c-.462 0-.691 0-.84-.14-.148-.141-.158-.374-.178-.833l-.248-5.409c-.023-.5-.034-.753.118-.91.15-.157.4-.157.904-.157h.44c.498 0 .748 0 .898.154.152.154.147.406.134.91-.034 1.385-.046 2.92-.15 4.05 0 .01.007.018.014.018a.018.018 0 00.015-.01c.538-1.37 1.227-3.03 1.868-4.51.128-.297.192-.445.32-.528.128-.084.291-.084.613-.084h.586c.477 0 .714 0 .862.146.149.147.155.386.164.867.026 1.338.062 2.806.024 4.042 0 .01.008.02.017.02.008 0 .015-.005.02-.012.476-1.447 1.136-3.11 1.662-4.42.124-.313.186-.468.316-.555.132-.086.297-.086.633-.086h.226M32.882.178h-.225c-.42 0-.818 0-1.205.264-.287.193-.443.445-.567.72a1.401 1.401 0 00-.346-.546c-.447-.44-.974-.44-1.58-.44h-.587c-.406 0-.791 0-1.175.25-.296.194-.454.45-.586.73a1.385 1.385 0 00-.321-.517c-.45-.462-.996-.462-1.63-.462h-.44c-.614 0-1.191 0-1.642.475-.453.476-.428 1.053-.4 1.663l.248 5.41c.026.567.052 1.1.496 1.525.445.425.98.425 1.549.425h1.03c.405 0 .789 0 1.172-.25.31-.201.468-.47.603-.761.066.205.177.396.355.573.448.436.991.436 1.57.436h1.062c.39 0 .763 0 1.135-.235.374-.235.534-.568.704-.92l2.622-5.41c.391-.804.728-1.497.277-2.217-.45-.718-1.222-.718-2.117-.718v.005h-.002z" fill="#0A0A0A"></path>
                    <path d="M34.749 9.786c-.502 0-.966-.222-1.282-.611a1.626 1.626 0 01-.33-1.374 1.651 1.651 0 011.44-1.3.872.872 0 01-.287-.235l-.023-.03c-.29-.391-.176-.83.014-1.556.105-.4.188-.762.272-1.124.126-.541.256-1.102.453-1.784.113-.39.194-.673.468-.876.273-.204.571-.204.989-.204h.342c.78 0 1.296 0 1.599.44.304.44.133.902-.152 1.668-.14.369-.26.709-.378 1.045-.201.56-.408 1.14-.688 1.85-.139.347-.235.595-.489.772-.276.184-.546.184-.919.184h-.29c.22.105.415.258.574.453.314.385.436.889.331 1.374a1.655 1.655 0 01-1.614 1.31h-.03v-.002z" fill="#FFFFFF"></path>
                    <path d="M36.799 1.2c.686 0 1.028 0 1.182.22.152.22.03.548-.212 1.2-.369.986-.619 1.757-1.064 2.887-.116.3-.177.449-.304.539-.002 0-.004.006-.01.007-.128.085-.291.085-.618.085-.622 0-.932 0-1.086-.192-.006-.005-.008-.011-.01-.013-.146-.197-.067-.505.096-1.127.261-1.004.398-1.776.722-2.89.096-.341.144-.51.284-.612.135-.101.315-.101.678-.101h.342M34.777 7a1.137 1.137 0 010 2.274h-.028a1.137 1.137 0 110-2.274h.028zM36.799.179h-.342c-.455 0-.883 0-1.295.306-.41.306-.526.712-.648 1.143-.203.695-.333 1.262-.46 1.81-.087.37-.168.717-.27 1.108-.17.66-.313 1.203-.092 1.71a2.174 2.174 0 00-1.058 1.438 2.154 2.154 0 00.438 1.8c.412.51 1.024.801 1.678.801h.029a2.174 2.174 0 002.116-1.718 2.149 2.149 0 00-.243-1.52c.104-.036.207-.086.309-.156l.013-.008.02-.015c.376-.263.515-.62.668-1 .283-.72.49-1.302.691-1.866.12-.336.24-.672.376-1.039.297-.795.553-1.479.094-2.139-.457-.66-1.182-.66-2.02-.66h-.004V.18z" fill="#0A0A0A"></path>
                    <path d="M17.498 9.342c-2.094 0-4.33-1.001-4.33-3.81 0-2.499 1.62-5.02 5.242-5.02 3.247 0 4.403 2.067 4.403 3.837v.511h-.024c-.222 2.738-2.25 4.482-5.29 4.482zm-.55-3.766c0 1.03.462 1.03.71 1.03 1.013 0 1.389-1.53 1.389-2.496 0-.838-.376-.908-.73-.908-.967 0-1.37 1.547-1.37 2.374z" fill="#FFFFFF"></path>
                    <path d="M18.41 1.022c2.672 0 3.892 1.547 3.892 3.33 0 2.464-1.6 4.477-4.802 4.477-2.708 0-3.817-1.509-3.817-3.298 0-2.16 1.38-4.51 4.729-4.51m-1.976 4.557c0 .9.339 1.54 1.222 1.54 1.404 0 1.898-1.803 1.898-3.008 0-.787-.31-1.419-1.239-1.419-1.334 0-1.88 1.786-1.88 2.887zM18.41 0c-2.308 0-3.66.972-4.385 1.79-.881.991-1.368 2.32-1.368 3.743 0 2.088 1.274 4.32 4.841 4.32 3.109 0 5.307-1.76 5.743-4.478h.083V4.35c0-1.207-.447-2.297-1.261-3.071C21.187.444 19.924.002 18.41.002V0zm-.951 5.578c0-.823.404-1.866.858-1.866.085 0 .136.01.158.018.017.03.06.136.06.378 0 .812-.311 1.987-.877 1.987a.362.362 0 01-.115-.013c-.02-.034-.084-.17-.084-.506v.002zm-1.07-.002h-.975 1.332-.357z" fill="#0A0A0A"></path>
                    <path d="M3.117 10.611c.04-.17.192-.29.367-.29h3.272c2.43 0 3.625 1.564 3.625 3.269 0 2.659-1.887 4.185-4.755 4.185H2.071a.376.376 0 01-.367-.453L3.05 10.9l.067-.289zm1.447 5.437h1.102c1.398 0 1.952-1.242 1.952-2.443 0-1.024-.398-1.564-1.407-1.564h-.5a.376.376 0 00-.369.299l-.78 3.706.002.002zM17.92 14.663a.378.378 0 01-.337.207h-3.82a.189.189 0 00-.183.15l-.156.754a.187.187 0 00.182.225h2.888c.282 0 .465.299.335.549l-.532 1.024a.38.38 0 01-.334.203h-5.016a.377.377 0 01-.369-.455L12 10.618a.376.376 0 01.368-.296h7.024c.28 0 .46.293.336.543l-.513 1.024a.374.374 0 01-.336.207h-4.524a.19.19 0 00-.184.15l-.126.62a.19.19 0 00.186.226H18.1c.28 0 .463.295.337.545l-.519 1.024v.002zM21.176 16.456s.002 0 .002.002l-.615 1.118a.375.375 0 01-.329.195H18.41a.376.376 0 01-.327-.56l3.766-6.702a.375.375 0 01.327-.191h2.862c.184 0 .342.133.37.315l1.102 6.702a.375.375 0 01-.37.436h-1.822c-.19 0-.35-.14-.374-.327l-.084-.661a.375.375 0 00-.374-.327h-2.31zm2.221-1.769a.19.19 0 00.188-.212 45.624 45.624 0 01-.244-2.44.03.03 0 00-.03-.028.029.029 0 00-.028.019 39.201 39.201 0 01-1.1 2.389.189.189 0 00.17.272h1.044zM28.876 10.322h2.133c.238 0 .417.22.366.453l-1.058 4.997a.188.188 0 00.184.227h3.084c.24 0 .42.224.367.459l-.233 1.024a.377.377 0 01-.367.293h-5.589a.377.377 0 01-.368-.455l1.483-6.997s0-.002-.002-.002z" fill="#FFFFFF"></path>
                   </svg>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"> 
            <path d="M17 18.375H7.35116C7.20479 18.375 7.06306 18.3236 6.95069 18.2298C6.83831 18.1361 6.76242 18.0058 6.73623 17.8618L4.65013 6.3882C4.62394 6.24419 4.54805 6.11394 4.43568 6.02016C4.3233 5.92637 4.18158 5.875 4.03521 5.875H2.625" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7.625 21.5C8.48794 21.5 9.1875 20.8004 9.1875 19.9375C9.1875 19.0746 8.48794 18.375 7.625 18.375C6.76206 18.375 6.0625 19.0746 6.0625 19.9375C6.0625 20.8004 6.76206 21.5 7.625 21.5Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17 21.5C17.8629 21.5 18.5625 20.8004 18.5625 19.9375C18.5625 19.0746 17.8629 18.375 17 18.375C16.1371 18.375 15.4375 19.0746 15.4375 19.9375C15.4375 20.8004 16.1371 21.5 17 21.5Z" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5249 8.99999C4.5249 8.66862 4.79353 8.39999 5.1249 8.39999H13.9999C14.3313 8.39999 14.5999 8.66862 14.5999 8.99999C14.5999 9.33136 14.3313 9.59999 13.9999 9.59999H5.1249C4.79353 9.59999 4.5249 9.33136 4.5249 8.99999ZM19.1149 11.4111C19.4402 11.4747 19.6523 11.7898 19.5888 12.115L18.9327 15.4735C18.8807 15.754 18.7323 16.0076 18.5132 16.1905C18.293 16.3743 18.0152 16.475 17.7283 16.475H6.3749C6.04353 16.475 5.7749 16.2064 5.7749 15.875C5.7749 15.5436 6.04353 15.275 6.3749 15.275H17.7283C17.7342 15.275 17.7398 15.2729 17.7443 15.2692C17.7488 15.2654 17.7518 15.2602 17.7529 15.2545L17.7543 15.2468L17.7543 15.2468L18.411 11.885C18.4746 11.5597 18.7897 11.3476 19.1149 11.4111Z" fill="#333333ff"></path>
            <g clip-path="url(#AddToCart_a)"> 
              <path d="M15.25 7H20.75" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M18 4.25V9.75" stroke="#333333ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g> 
            <defs> 
              <clipPath id="AddToCart_a"> 
                <rect width="8" height="8" fill="white" transform="translate(14 3)"></rect>
              </clipPath>
            </defs>
          </svg>
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

export default IBodysection
