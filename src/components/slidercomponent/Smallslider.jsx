import "../styles/slidercss.css";
import { useEffect, useState } from "react";
const Smallslider = ({ data }) => {
  const [slides, setslides] = useState(0);
  const nextslide = () => setslides(slides >= data.length - 1 ? 0 : slides + 1);
  useEffect(() => {
    const timer = setInterval(nextslide, 3000);
    return () => clearInterval(timer);
  }, [slides]);
  const sliderpercent = slides * 100;
  return (
    <div className="slidermain">
      <div className="sliderwrapp">
        <a href="" className="slidera">
          {data.map((image, index) => {
            return (
              <img
                src={image.src}
                alt={index}
                key={index}
                className="sliderimage"
                style={{
                  transform: `translateX(-${sliderpercent}%)`
                }}
              />
            ); 
          })}
        </a>
      </div>
      <div className="sliderdots">
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
                backgroundColor:slides === index ? "black" : "rgba(0,0,0,0.13)",
                transition:"transform 0.3s ease-in-out",
              }}
            ></div>
          );
        })}
      </div> 
    
    </div>
  );
};
export default Smallslider;
