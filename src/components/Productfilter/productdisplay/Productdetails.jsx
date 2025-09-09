import React from "react";
import "../filter.css";
import DrawStar from "./Drawstar";
import { useItems } from "../../../context/Filtercontext";
const Productdetails = () => {
  const { items } = useItems();
  return (
    <div>
      {console.log("displayy", items)} 
      <div className="productconatiner">
        {items.map((p, index) => {
          return (  
            <div className="productflexarea" key={index}>
              <div className="producttopflexarea" key={index}>
                <div className="productimagearea">
                  <div className="pimageouter">
                    <img className="pimage" src={p.src} alt="productimage" />
                  </div>
                </div>
                <div className="productdetails-section">
                  <div className="sponsertext">Sponsored</div>
                  <div className="productname-container">
                    <div className="productname-area">{p.name}</div>
                  </div>
                  <div className="product-ratingarea">
                    <div className="product-stararea">
                      {/* <div className="stararea"> */}
                      <div>
                        <DrawStar rating={4.5} />
                      </div>
                      {/* </div> */}
                      <div className="product-number">
                        <div className="product-ownum">({p.purchasecount})</div>
                      </div>
                    </div>
                    <div className="flip-assured">
                      <img
                        src="https://rukminim1.flixcart.com/www/120/32/promos/25/06/2024/71af54bd-9160-41ff-81cc-c55e534dedeb.png?q=60"
                        alt="f-assuredimage"
                      />
                    </div>
                  </div>
                  <div className="discoundarea">
                    <div className="discoundflexarea">
                      <div className="percentagearea">
                        <div className="percentagecontent">
                          <div className="pflexarea">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                                fill="#008C00"
                              ></path>
                            </svg>
                            <div className="percentagenumber">
                              {p.ratingpercent}%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cuttedprice">
                        <div className="cuttedprice-content">
                          ₹{p.linedprice}
                        </div>
                      </div>
                      <div className="productprice">
                        <div className="productprice-content">
                          ₹{p.org_price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bankofferarea">
                    <div className="wowimage">
                      <img
                        src="https://rukminim1.flixcart.com/www/38/16/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
                        alt="wowimage"
                      />
                    </div>
                    <div className="bankoffer-price">
                      {" "}
                      ₹{p.bankoffer_price}{" "}
                    </div>
                    <div className="bankoffer-price2"> with Bank offer</div>
                  </div>
                  <div className="exchange-content">
                    <div className="exchangetext1">Upto</div>
                    <div className="exchangetext2">₹220</div>
                    <div className="exchangetext3">Off on Exchange</div>
                  </div>
                  {p.delivery_1day == true ? (
                    <div className="deliverydate">
                      <div className="deliverytext1">Delivery by</div>
                      <div className="deliverytext2">1st Sep</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <div className="favbutton">
                  <div className="fav">
                    <svg width="24" height="24" viewBox="0 0 256 256">
                      <path fill="none" d="M0 0h256v256H0z"></path>
                      <path
                        d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"
                        fill="#fff"
                        stroke="#B8BBBF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="12"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="productbottomflexarea">
                {p.features.map((m, index) => {
                  return (
                    <div className="productfeaturebox" key={index}>
                      <div className="productfeature-content">{m}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productdetails;
 