import "../styles/slidercss.css";
import { useEffect, useState } from "react";
const Lapmainslider = ({ data }) => {
  const [slides, setslides] = useState(0);
  const nextslide = () => setslides(slides >= data.length - 1 ? 0 : slides + 1);
  useEffect(() => {
    const timer = setInterval(nextslide, 3000);
    return () => clearInterval(timer);
  }, [slides]);
  const sliderpercent = slides * 100;
  return (
    <div>
      <div className="lapslidermain">
        <div className="lapsliderwrapp">
          <a href="" className="lapslidera">
            {data.map((image, index) => {
              return (
                <img
                  src={image.src}
                  alt={index}
                  key={index}
                  className="lapsliderimage"
                  style={{
                    transform: `translateX(-${sliderpercent}%)`,
                  }}
                />
              );    
            })}
          </a>

          <button
            className="leftscrollbutton"
            onClick={() =>
              setslides(slides === 0 ? data.length - 1 : slides - 1)
            }
          >
            <span className="arrowleft"></span>
          </button> 

          <button
            className="rightscrollbutton"
            onClick={() =>
              setslides(slides === data.length - 1 ? 0 : slides + 1)
            }
          >
            <span className="arrowright"></span>
          </button>
        </div>
        <div className="lapsliderdots">
          {data.map((_, index) => {
            return (
              <div  
                key={index}
                onClick={() => setslides(index)}
                style={{
                  width: slides === index ? "48px" : "12px",
                  height: "4px",
                  borderRadius: "2px",
                  margin: "0px 4px",
                  backgroundColor:
                    slides === index ? "black" : "rgba(0,0,0,0.13)",
                  transition: "transform 0.3s ease-in-out",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="big-million-wrap">
        <div className="big-million-main">
           <img src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/c6e003e409dd71c8.jpg?q=60" alt="" />
        </div>
      </div> 
    </div> 
  );
};

export default Lapmainslider;
