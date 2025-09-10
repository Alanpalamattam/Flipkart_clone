import React, { useEffect, useState } from "react";
import { useItems } from "../../../../context/Filtercontext";
import { checkbox } from "../../../Productfilter/filterpage/filtercheckboxes.json";
const Monitorfilter = () => {
  const { allitems, setItems, selectedfilters, setselectedfilters } =
    useItems();
    const minLimit = 250;
  const maxLimit = 60000;
  const [minVal, setMinVal] = useState(minLimit);
  const [maxVal, setMaxVal] = useState(maxLimit);
  
const handleMinChange = (e) => {
  const value = Math.min(Number(e.target.value), maxVal - 1); 
  setMinVal(value);

  setselectedfilters((prev) => ({
    ...prev,
    Price: [[value, prev.Price?.[0]?.[1] ?? maxVal]], 
  }));
};

const handleMaxChange = (e) => {
  const value = Math.max(Number(e.target.value), minVal + 1);
  setMaxVal(value);

  setselectedfilters((prev) => ({
    ...prev,
    Price: [[prev.Price?.[0]?.[0] ?? minVal, value]], 
  }));
};

  
  const handleTick = (category, item) => {
    setselectedfilters((prev) => {
      const prevValues = prev[category];
      if (prevValues.includes(item)) {
        return {
          ...prev,
          [category]: prevValues.filter((v) => v !== item),
        };
      } else {
        return {
          ...prev,
          [category]: [...prevValues, item],
        };
      }
    });
  };
  useEffect(() => {
    filterapply();
  }, [selectedfilters]);
  const [openIndex, setOpenIndex] = useState([]);
  const handleclick = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i != index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };
  const filterapply = () => {
    const filteredProducts = allitems.filter((product) => {
      const price = Number(product.org_price.replace(/,/g, ""));

      const brandOk =
        selectedfilters.Brand.length === 0 ||
        selectedfilters.Brand.includes(product.brand);
  
      const priceOk =
        selectedfilters.Price.length === 0 ||
        selectedfilters.Price.some(
          ([min, max]) => price >= min && price <= max
        );

      const ratingOk =
        selectedfilters["Customer Ratings"].length === 0 ||
        Number(product.rating) >=
          Math.max(...selectedfilters["Customer Ratings"]);

      const discountOk =
        selectedfilters.Discount.length === 0 ||
        Number(product.ratingpercent) >=
          Math.max(
            ...selectedfilters.Discount.map((d) =>
              Number(d.replace("% or more", ""))
            )
          );
      const screenOK =
        selectedfilters["Screen Resolution"].length === 0 ||
        selectedfilters["Screen Resolution"].includes(product.screenresolution);
      console.log(selectedfilters["Screen Resolution"]);
      return brandOk && priceOk && ratingOk && discountOk && screenOK;
    });
    setItems(filteredProducts);
    console.log("apply", filteredProducts);
  };
  return (
    <div className="filter-section-main">
      <div className="filter-large-flexarea">
        <div className="Filters-heading-large">
          <div className="f-headingflex">
            <div>Filters</div>
          </div>
        </div>
        <div className="f-large-categories">
          <div className="f_large_hading1">
            <span>CATEGORIES</span>
          </div>
          <div className="f-large-heading2">
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                class="leftarrow"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#878787"
                ></path>
              </svg>
            </span>
            <a href="">Computers</a>
          </div>
          <div className="f-large-heading2">
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                class="leftarrow"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#878787"
                ></path>
              </svg>
            </span>
            <a href="">Computer Components</a>
          </div>
          <div className="f-large-heading3">
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
                class="leftarrow"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#fff"
                ></path>
              </svg>
            </span>
            <a href="">Monitors</a>
          </div>
        </div>
        <div className="f-large-price">
          <div className="f-large-price-section">
            <div className="f-large-price-wrap">
              <span>Price</span>
            </div>
          </div>
          <div className="slider-price-image-section">
            <div className="slider-price-image-wrapper">
              <div
                className="slider-top-image"
                style={{ height: "3.125px", width: "33.83px" }}
              ></div>
              <div
                className="slider-top-image"
                style={{ height: "21.87px", width: "39.4683px" }}
              ></div>
              <div
                className="slider-top-image"
                style={{ height: "25px", width: "39.4683px" }}
              ></div>
              <div
                className="slider-top-image"
                style={{ height: "12.5px", width: "39.4683px" }}
              ></div>
              <div
                className="slider-top-image"
                style={{ height: "9.375px", width: "39.4683px" }}
              ></div>
              <div
                className="slider-top-image"
                style={{ height: "6.25px", width: "39.4683px" }}
              ></div>
            </div>
          </div>
          <div className="sliderrange">
            <div className="sliderfade"></div>
            <div
              className="rangearea"
              style={{
                left: `${((minVal - minLimit) / (maxLimit - minLimit)) * 100}%`,
                width: `${((maxVal - minVal) / (maxLimit - minLimit)) * 100}%`,
              }}
            ></div>

            <input
              type="range"
              className="sliderinputleft"
              min={minLimit}
              max={maxLimit}
              value={minVal}
              onChange={handleMinChange}
            />

            <input
              type="range"
              className="sliderinputright"
              min={minLimit}
              max={maxLimit}
              value={maxVal}
              onChange={handleMaxChange}
            />
          </div>
          <div className="price-dots">
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
           <div className="price-dot-content">.</div>
          </div>
          <div className="min-max-price-section">
           <div className="min-price-section">
            <select className="min-select" name="" id="">
             <option value="value" className="min-option">Min</option>
             <option value="250" className="min-option" >250</option>
             <option value="500" className="min-option">500</option>
             <option value="1000" className="min-option" >1000</option>
             <option value="2000" className="min-option" >2000</option>
             <option value="5000" className="min-option">5000</option>
             <option value="10000" className="min-option" >10000</option>
             <option value="20000" className="min-option" >20000</option>
             <option value="30000" className="min-option" >30000</option>
             <option value="40000" className="min-option">40000</option>
            </select>
           </div> 
           <div className="min-max-price-to-text">to</div>
          <div className="max-price-section">
           <select className="min-select" name="" id="">
            <option value="Max" className="min-option">{maxVal}</option>
             <option value="250" className="min-option">250</option>
              <option value="500" className="min-option">500</option>
             <option value="1000" className="min-option" >1000</option>
             <option value="2000" className="min-option" >2000</option>
             <option value="5000" className="min-option">5000</option>
             <option value="10000" className="min-option" >10000</option>
             <option value="20000" className="min-option" >20000</option>
             <option value="30000" className="min-option" >30000</option>
             <option value="40000" className="min-option">40000</option>
              <option value="500" className="min-option">60000</option>
              
             
           </select>
          </div>

           
          </div>               
        </div>
        <div className="flp-assured-large-checkbox">
          <label className="checkboxarea-f-assured">
            <input type="checkbox" class="f-large-checkbox" />
            <div className="checkbox-wrapper-box">
              <img
                style={{
                  objectFit: "cover",
                  height: "14.2px",
                  width: "100%",
                  paddingTop: "-2px",
                }}
                src={""}
              />
            </div>
            <div className="f-assured-logoarea-large">
              <div>
                <img
                  height="21"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                  class="SwtzWS"
                />
              </div>
            </div>
          </label>
          <div className="questionmark-section">
            <span className="q-innertext">?</span>
          </div>
        </div>
        {/* <div className="filter-types-area" onClick={handleclick}>
          <div className="individualarea-filter">
            <div className="filter-namearea-large">BRAND</div>
            <svg
              width="16"
              height="27"
              viewBox="0 0 16 27"
              xmlns="http://www.w3.org/2000/svg"
              className="filterl-downarrow"
            >
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#878787"
              ></path>
            </svg>
          </div>
          <div style={{ display: visible ? "block" : "none" }}>
            <div className="filter-dropdown-contentarea">
              <div className="filter-brandsearch-area">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 18"
                  className="search-filter-brand"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#878787" fill-rule="evenodd">
                    <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
                    <path
                      class="JVQyl9"
                      d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                    ></path>
                  </g>{" "}
                </svg>
                <input
                  type="text"
                  placeholder="Search Brand"
                  className="searchbrand-input"
                ></input>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div className="checkbox-wrapper-box2">
                  <img
                    style={{
                      objectFit: "cover",
                      height: "13px",
                      width: "100%",
                      paddingTop: "-2px",
                    }}
                    src={""}
                  />
                  <div className="delltest">DELL</div>
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div className="checkbox-wrapper-box2">
                  <img
                    style={{
                      objectFit: "cover",
                      height: "13px",
                      width: "100%",
                      paddingTop: "-2px",
                    }}
                    src={""}
                  />
                  <div className="delltest">LG</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {checkbox
          .filter((x) => !["Price", "F-Assured"].includes(x.name))
          .map((x, index) => (
            <div
              className="filter-types-area"
              key={index}
              onClick={() => handleclick(index)}
            >
              <div className="individualarea-filter">
                <div className="filter-namearea-large">{x.name}</div>
                <svg
                  width="16"
                  height="27"
                  viewBox="0 0 16 27"
                  xmlns="http://www.w3.org/2000/svg"
                  className="filterl-downarrow"
                  style={{
                    transform: openIndex.includes(index)
                      ? "rotate(90deg)"
                      : "rotate(-90deg)",
                  }}
                >
                  <path
                    d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                    fill="#878787"
                  ></path>
                </svg>
              </div>

              {openIndex.includes(index) &&
                x.checkboxes.map((opt, i) => {
                  const category = x.name;
                  console.log(category);
                  const isChecked =
                    selectedfilters[category]?.includes(opt) || false;
                  return (
                    <>
                      <div
                        style={{
                          display: openIndex.includes(index) ? "block" : "none",
                        }}
                        key={i}
                        className="filter-dropdown-contentarea"
                      >
                        <div style={{ marginTop: "17px" }}>
                          <div
                            className="checkbox-wrapper-box2"
                            onClick={() => handleTick(category, opt)}
                          >
                            <img
                              style={{
                                objectFit: "cover",
                                height: "13px",
                                width: "13px",
                                paddingTop: "-2px",
                              }}
                              src={
                                isChecked
                                  ? "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                                  : "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-mages/images/unchecked-58d79d4f.png"
                              }
                            />
                            <div className="delltest">
                              {opt}
                              {x["rating-checkbox"] === true ? (
                                <div className="checkbox-value">
                                  ★&nbsp;& above
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          ))}
      </div>
      {console.log("filter", selectedfilters)}
    </div>
  );
};

export default Monitorfilter;
