import { categorylist } from "./lapslider.json";
import "../styles/slidercss.css";
 const Categoryslider = () => {
  return (
    <div>
      <div className="lapitem">
        <div className="lapitemwrapp">
          {categorylist.map((category, index) => (
            <div key={index} className="itemflexx">
              <div className="lapcategoryinnerwrapp">
                <div className="laptopscrollimgdiv">
                  <img
                    className="itemsimage"
                    alt="Minutes"
                    src={category.src}
                  ></img>
                </div>
                <div className="imagedescription">
                  <span>{category.name}</span>
                  {category.arrow ? (
                    <span
                      className="categorydropdown"
                      style={{
                        width: category.doubleline ? "10px" : "6px",
                        marginTop: category.doubleline ? "3px" : "4px",
                      }}
                    ></span>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
  );
};

export default Categoryslider;
