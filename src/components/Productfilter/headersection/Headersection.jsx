import React, { useState } from "react";
import "../filter.css";
import { Link } from "react-router-dom";
import { useItems } from "../../../context/Filtercontext";
import Productdetails from "../productdisplay/Productdetails";
import Footerr from "../../../../src/components/Footerr"
const Headersection = () => {
  const { items,setSortType,sorttype} = useItems();
  const [sortview, setsortview] = useState(false);
  return (
    <div className="mobilefilter">
      <div className="mobileheader">
        <div className="mobileheader-outer">
          <div className="header-rightside">
            <div className="backbutton">
              <Link to="/">
                <img src="/backbutton.svg" alt="" />
              </Link>
            </div>
            <div className="flipicon">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png"
                style={{ width: "23px" }}
              ></img>
            </div>
            <div className="monitortext">
              <div className="monitortext-content">Monitors</div>
            </div>
            <div className="searchicon-filter">
              <svg
                height="30"
                viewBox="0 0 32 32"
                width="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path>
                <path
                  d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z"
                  stroke="#111112"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.9524 19.95L24.0024 24"
                  stroke="#111112"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
             </div> 
            <div className="carticon">
               <img src="/carttsmall.svg" alt="" />
            </div>
            <div className="loginbutt">
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
      {sortview && (
        <div className="overlay" onClick={() => setsortview(false)}></div>
      )}
      <div className={`popup ${sortview ? "show" : ""}`}>
        <div className="popupflexarea">
          <div className="sortbytext">sort by</div>
          <div className="sortbymargin"></div>
          <div className="sortbybuttons">
            <div>
              <div className="popularitybtn">
                <div className="popularitytextcontainer">Popularity</div>
                <div
                  className="sortselecet-btn"
                  onClick={() =>
                    setSortType("popularity") & setsortview(false)
                  }
                >
                  <img
                    src={
                      sorttype === "popularity"
                        ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60"
                        : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                    }
                  />
                </div>
              </div>
              <div className="popularitybtn">
                <div className="popularitytextcontainer">
                  Price -- Low to High
                </div>
                <div 
                  className="sortselecet-btn"
                  onClick={() => setSortType("lowtohigh") & setsortview(false)}
                >
                  <img
                    src={
                      sorttype === "lowtohigh"
                        ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60"
                        : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                    }
                  />
                </div>
              </div>
              <div className="popularitybtn">
                <div className="popularitytextcontainer">
                  Price -- High to Low
                </div>
                <div
                  className="sortselecet-btn"
                  onClick={() => setSortType("hightolow") & setsortview(false)}
                >
                  <img
                    src={
                      sorttype === "hightolow"
                        ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60"
                        : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                    }
                  />
                </div>
              </div>
              <div className="popularitybtn">
                <div className="popularitytextcontainer">Newest First</div>
                <div
                  className="sortselecet-btn"
                  onClick={() => setSortType("newest") & setsortview(false)}
                >
                  <img
                    src={
                      sorttype === "newest"
                        ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=60"
                        : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filterbuttons-mobile">
        <div className="filterbutwrap">
          <div className="sortbut" onClick={() => setsortview(true)}>
             <img src="/sortbutton.svg" alt="" />
            <div className="sorttext">Sort</div>
          </div>
          <div className="seperaterline"></div>
         <Link to={"/filter"} style={{textDecoration:"none"}} className="filterbut">
          <div className="filterbut">
               <img src="/filterbutt.svg" alt="" />
            <div className="sorttext">Filter</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="devileryfilter-premiumbrands">
        <div className="delivery-premiuim-wrapper">
          <div className="deliveryflexarea">
            <div className="deliverybutton">
              <div className="deliveryimg">
                <img
                  src="https://rukminim1.flixcart.com/www/64/64/promos/08/08/2025/81a04f66-9b19-433c-93ee-88385a8150c2.png?q=60"
                  alt="deliveryimage"
                />
              </div>
              <div className="deliverytext">
                <span>Delivery in 1 Day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="readmore">
        <div className="readmoreflexarea">
          <div className="readmorerow1">Computers</div>
          <div className="readmorerow2">Read More</div>
        </div>
      </div>
      <Productdetails items={items} />
      <Footerr/>
    </div>
  );
};

export default Headersection;
