import "./best.css";
import { Link } from "react-router-dom";
const Bestinrowone = () => {
  const bestproducts = [
  {
    img: "https://rukminim2.flixcart.com/image/220/220/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60",
    firstheading: "Best Truewireless Headphones",
    secondheading: "Grab Now"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/xif0q/dslr-camera/8/q/r/compact-camera-portable-small-point-and-shoot-digital-camera-for-original-imahec6vcssf4hzg.jpeg?q=60",
    firstheading: "Top Mirrorless Cameras",
    secondheading: "Shop Now!"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60",
    firstheading: "Fastrack Smartwatches",
    secondheading: "From ₹1,399"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60",
    firstheading: "Best Selling Mobile Speakers",
    secondheading: "From ₹499*"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=60",
    firstheading: "Projector",
    secondheading: "From ₹6990"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/kl9rssw0/monitor/y/c/2/proart-display-pa278qv-27-pa278qv-asus-original-imagyfpfyzwgdygs.jpeg?q=60",
    firstheading: "Asus Monitors",
    secondheading: "From ₹14999"
  },
  {
    img: "https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/v/g/f/p2725h-99-srgb-1xhdmi-1x-dp-5x-usb-3-2-gen1-height-adjust-tilt-original-imahfxshcvrcrugk.jpeg?q=60",
    firstheading: "Monitor",
    secondheading: "From ₹8279"
  }
];

  const topproducts=[
    {
     "img":"https://rukminim1.flixcart.com/image/100/100/xif0q/shoe/m/l/m/-original-imahddyzhk9mqnw6.jpeg?q=60",
     "firstheading":"PUMA, ADIDAS ...",
     "secondheading":"Min. 65% Off"
    },
    {
     "img":"https://rukminim1.flixcart.com/image/220/220/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60",
     "firstheading":"Top Selling Stationery",
     "secondheading":"From ₹49"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/100/100/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=60",
     "firstheading":"Geared Cycles",
     "secondheading":"Up to 70% Off"
    },      
    {
      "img":"https://rukminim1.flixcart.com/image/100/100/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=60",
      "firstheading":"Best of Action Toys",
     "secondheading":"Up to 70% Off"
    },
    {
      "img":"https://rukminim1.flixcart.com/image/220/220/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=60",
      "firstheading":"Dry Fruits",
     "secondheading":"Up to 75% Off"
    },
    {
      "img":"https://rukminim1.flixcart.com/image/100/100/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=60",
      "firstheading":"Remote Control Toys",
     "secondheading":"Up to 80% Off"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/100/100/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60",
      "firstheading":"Coffee Powder",
     "secondheading":"Up to 80% Off"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/100/100/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=60",
      "firstheading":"Food Spreads",
     "secondheading":"Up to 75% Off"
    }
  ]   
  const mobiles=[
    {
     "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/p/a/i/-original-imahfvuagzmf2ppf.jpeg?q=60",
     "firstheading":"Samsung Galaxy S25 5G",
     "secondheading":"Just ₹68,999*"
    },
    {
     "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/q/l/i/-original-imahegqhjqz38uks.jpeg?q=60",
     "firstheading":"Google Pixel 9",
     "secondheading":"Just ₹62,999*"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/e/l/m/-original-imahcfcfhxrf5hzg.jpeg?q=60",
     "firstheading":"Nothing Phone (3a)",
     "secondheading":"From ₹22,999*"
    },      
    {
      "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/6/9/t/-original-imahfkvfhpfaftmb.jpeg?q=60",
      "firstheading":"vivo T4 Lite 5G",
     "secondheading":"From ₹9,999"
    },
    {
      "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=60",
      "firstheading":"Oppo K13x 5G",
     "secondheading":"Just ₹10,749*"
    },
    {
      "img":"https://rukminim1.flixcart.com/image/220/220/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60",
      "firstheading":"Realme P3x 5G",
     "secondheading":"Just ₹12,449*"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/100/100/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60",
      "firstheading":"Coffee Powder",
     "secondheading":"Up to 80% Off"
    },
    {
       "img":"https://rukminim1.flixcart.com/image/220/220/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=60",
      "firstheading":"Soft Toys",
     "secondheading":"Up to 70% Off"
    }
  ]    
  
  return (
    <div>
      <div className="best-outerwrapp">
        <div className="best-innerwrap">
          <div className="bestcategory-namepart">
            <div className="bestcategory-namewrapper">Best of Electronics</div>
          </div>
          <div>
            <div className="best-productarea">
              <Link style={{textDecoration:"none",color:"black"}} to={"monitors"}>
               <div className="bestproduct-innerwrap">
                <div
                  className="best-imagearea"
                >
                  <img
                    className="best-img"
                    src="https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/1/3/x/legion-r25f-30-full-hd-25-2023-67b8gacbin-lenovo-original-imagybdykfdzzfyq.jpeg?q=60"
                    alt=""
                  />
                </div>
                <div className="bestdecription">
                  <div className="firstdescription">
                    Monitors
                  </div>
                  <div className="secondescription">From ₹7949</div>
                </div>
              </div>
              </Link>
              {
                bestproducts.map((x,i)=>
                   <div className="bestproduct-innerwrap" key={i}>
                <div
                  className="best-imagearea"
                >
                  <img
                    className="best-img"
                    src={x.img}
                    alt=""
                  />
                </div>
                <div className="bestdecription">
                  <div className="firstdescription">
                    {x.firstheading}
                  </div>
                  <div className="secondescription">{x.secondheading}</div>
                </div>
              </div>
                )
              }       
            </div>
          </div>
        </div>
      </div>
      <div className="home-ad-section">
        <div className="home-ad-flex-area">
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/a8e2ebb6e3486665.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/a2c99766fe520090.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/1156864a33cbce2e.jpg?q=60" alt="" />
             </div>
           </div>
        </div>
      </div>
      <div className="best-outerwrapp">
        <div className="best-innerwrap">
          <div className="bestcategory-namepart">
            <div className="bestcategory-namewrapper">Top Products for you</div>
          </div>
          <div>
            <div className="best-productarea">
              {
               topproducts.map((x)=>
               <div className="bestproduct-innerwrap">
                <div
                  className="best-imagearea"
                >
                  <img
                    className="best-img"
                    src={x.img}
                    alt=""
                  />
                </div>
                <div className="bestdecription">
                  <div className="firstdescription">
                    {x.firstheading}
                  </div>
                  <div className="secondescription">{x.secondheading}</div>
                </div>
              </div> 
              )
              }      
            </div>
          </div>
        </div>
      </div>
      <div className="home-ad-section">
        <div className="home-ad-flex-area">
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/60d4531d13f60d2a.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/031abc39613d5ee6.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/e87849d49fc95c4a.jpg?q=60" alt="" />
             </div>
           </div>
        </div>
      </div>
      <div className="best-outerwrapp">
        <div className="best-innerwrap">
          <div className="bestcategory-namepart">
            <div className="bestcategory-namewrapper">Mobiles</div>
          </div>
          <div>
            <div className="best-productarea">
              {
               mobiles.map((x)=>
               <div className="bestproduct-innerwrap">
                <div
                  className="best-imagearea"
                >
                  <img
                    className="best-img"
                    src={x.img}
                    alt=""
                  />
                </div>
                <div className="bestdecription">
                  <div className="firstdescription">
                    {x.firstheading}
                  </div>
                  <div className="secondescription">{x.secondheading}</div>
                </div>
              </div> 
              )
              }      
            </div>
          </div>
        </div>
      </div>  
      <div className="home-ad-section">
        <div className="home-ad-flex-area">
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/f6ed964fe7ec97c3.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/70a4f1db2db6ab7d.jpg?q=60" alt="" />
             </div>
           </div>
           <div className="home-ad-outer-wrap">
             <div className="home-ad-content">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/998b319bf7ec7880.jpg?q=60" alt="" />
             </div>
           </div>
        </div>
      </div> 
    </div>
  );
}; 

export default Bestinrowone;
