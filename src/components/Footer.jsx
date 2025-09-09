import React from 'react'
import "./styles/footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-main-wrap">
           <div>
             <div className="heading-footer-bold">
                About
             </div> 
             <a href="" className="footer-a-tag">Contact US</a>
             <a href="" className="footer-a-tag">About Us</a>
             <a href="" className="footer-a-tag">Careers</a>
             <a href="" className="footer-a-tag">Flipkart Stories</a>
             <a href="" className="footer-a-tag">Press</a>
             <a href="" className="footer-a-tag">Corporate Information</a>
           </div> 
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Group Companies
             </div>
             <a href="" className="footer-a-tag">Myntra</a>
             <a href="" className="footer-a-tag">Cleatrip</a>
             <a href="" className="footer-a-tag">Shopsy</a>
           </div>
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Help
             </div>
             <a href="" className="footer-a-tag">Payments</a>
             <a href="" className="footer-a-tag">Shipping</a>
             <a href="" className="footer-a-tag">Cancellation & Returns</a>
             <a href="" className="footer-a-tag">FAQ</a>

           </div>
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Consumer Policy
             </div>
             <a href="" className="footer-a-tag">Cancellation & Returns</a>
             <a href="" className="footer-a-tag">Terms Of Use</a>
             <a href="" className="footer-a-tag">Security</a>
             <a href="" className="footer-a-tag">Privacy</a>
             <a href="" className="footer-a-tag">Sitemap</a>
             <a href="" className="footer-a-tag">Grievance Redressal</a>
             <a href="" className="footer-a-tag">EPR Compilance</a>
           </div>
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Mail Us:
             </div>
              <p className="footer-mail-content">Flipkart Internet Private Limited,</p>
              <p className="footer-mail-content">Buildings Alyssa, Begonia &</p>
              <p className="footer-mail-content">Clove Embassy Tech Village,</p>
              <p className="footer-mail-content">Outer Ring Road, Devarabeesanahalli Village,</p>
              <p className="footer-mail-content">Bengaluru, 560103,,</p>
              <p className="footer-mail-content">Karnataka, India</p>
           </div>
           
        </div>
    </div> 
  )
} 

export default Footer
