import React from 'react'
import "./styles/footer.css"
const Footerr = () => {
  return (
    <div className='footer'>
        <div className="footer-main-wrap">
           <div>
             <div className="heading-footer-bold">
                About
             </div> 
             <a href="" className="footer-a-tag">Contact Us</a>
             <a href="" className="footer-a-tag">About Us</a>
             <a href="" className="footer-a-tag">Careers</a>
             <a href="" className="footer-a-tag" style={{textDecoration:"underline"}}>Flipkart Stories</a>
             <a href="" className="footer-a-tag">Press</a>
             <a href="" className="footer-a-tag">Corporate Information</a>
           </div> 
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Group  
             </div>
             <a href="" className="footer-a-tag">Myntra</a>
             <a href="" className="footer-a-tag">Cleartrip</a>
             <a href="" className="footer-a-tag">Shopsy</a>
           </div>
           <div className='footer-text-section'>
            <div className="heading-footer-bold">
                Help
             </div>
             <a href="" className="footer-a-tag">Payments</a>
             <a href="" className="footer-a-tag">Shipping</a>
             <a href="" className="footer-a-tag">Cancellation & Returns</a>
             <a href="" className="footer-a-tag" style={{textDecoration:"underline"}}>FAQ</a>

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
            <div className="heading-footer-bold" style={{textTransform:"revert"}}>
                Mail Us:
             </div>
              <p className="footer-mail-content">Flipkart Internet Private Limited,</p>
              <p className="footer-mail-content">Buildings Alyssa, Begonia &</p>
              <p className="footer-mail-content">Clove Embassy Tech Village,</p>
              <p className="footer-mail-content">Outer Ring Road, Devarabeesanahalli Village,</p>
              <p className="footer-mail-content">Bengaluru, 560103,</p>
              <p className="footer-mail-content">Karnataka, India</p>
              <div className="footer-social-text">
                Social:
              </div>
              <div className="footer-social-icon-area">
               <div className="footer-social-icon">
                <a href="https://www.facebook.com/flipkart">
                <img  style={{paddingTop:"1.4px"}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjkzMzEgMjFDMTcuOTAzNyAyMSAyMS45MzMxIDE2Ljk3MDYgMjEuOTMzMSAxMkMyMS45MzMxIDcuMDI5NDQgMTcuOTAzNyAzIDEyLjkzMzEgM0M3Ljk2MjU0IDMgMy45MzMxMSA3LjAyOTQ0IDMuOTMzMTEgMTJDMy45MzMxMSAxNi45NzA2IDcuOTYyNTQgMjEgMTIuOTMzMSAyMVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE2LjY4MzEgOC4yNUgxNS4xODMxQzE0LjU4NjQgOC4yNSAxNC4wMTQxIDguNDg3MDUgMTMuNTkyMSA4LjkwOTAxQzEzLjE3MDIgOS4zMzA5NyAxMi45MzMxIDkuOTAzMjYgMTIuOTMzMSAxMC41VjIxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjkzMzExIDEzLjVIMTUuOTMzMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="Facebook" width="24" height="26"/>
                </a>
               </div>
               <div className="footer-social-icon">
               <a href="https://www.twitter.com/flipkart" aria-label="Twitter">
                <img style={{paddingTop:"1.4px"}} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4M18yMCkiPgo8cGF0aCBkPSJNMTMuNTQzNiAxMC42MTc5TDIwLjA5NzEgM0gxOC41NDQxTDEyLjg1MzcgOS42MTQ0OEw4LjMwODg3IDNIMy4wNjY4OUw5LjkzOTY0IDEzLjAwMjNMMy4wNjY4OSAyMC45OTA4SDQuNjE5OTRMMTAuNjI5MSAxNC4wMDU2TDE1LjQyODggMjAuOTkwOEgyMC42NzA4TDEzLjU0MzIgMTAuNjE3OUgxMy41NDM2Wk0xMS40MTY1IDEzLjA5MDRMMTAuNzIwMiAxMi4wOTQ0TDUuMTc5NTMgNC4xNjkxMUg3LjU2NDkxTDEyLjAzNjMgMTAuNTY1MUwxMi43MzI2IDExLjU2MTFMMTguNTQ0OCAxOS44NzQ4SDE2LjE1OTVMMTEuNDE2NSAxMy4wOTA4VjEzLjA5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4M18yMCI+CjxyZWN0IHg9IjMuMDY2ODkiIHk9IjMiIHdpZHRoPSIxNy42MDM5IiBoZWlnaHQ9IjE4IiByeD0iMC4yIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" alt="Facebook" width="24" height="26"></img>
                </a>
               </div>
               <div className="footer-social-icon">
                <a href="https://www.youtube.com/flipkart" aria-label="YouTube">
                <img style={{paddingTop:"1.4px"}} src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/YoutubeLogo-8425c4.svg" alt="YouTube" width="24" height="26"></img>
                </a>
               </div>
               <div className="footer-social-icon" >
                 <a href="https://www.instagram.com/flipkart" aria-label="Instagram">
                 <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/InstagramLogo-43f906.svg" alt="Instagram" width="20" height="20"></img>
                 </a>
               </div>
              </div>
           </div>
            <div className='footer-text-section' >
            <div className="heading-footer-bold" style={{textTransform:"revert"}}>
                Registered Office Address:
             </div>
             <p className="footer-mail-content">Flipkart Internet Private Limited,</p>
              <p className="footer-mail-content">Buildings Alyssa, Begonia &</p>
              <p className="footer-mail-content">Clove Embassy Tech Village,</p>
              <p className="footer-mail-content">Outer Ring Road, Devarabeesanahalli Village,</p>
              <p className="footer-mail-content">Bengaluru, 560103,</p>
              <p className="footer-mail-content">Karnataka, India</p>
              <p className="footer-mail-content"> CIN : U51109KA2012PTC066107 </p>
              <p className="footer-mail-content"> Telephone: <a href="tel:044-45614700">044-45614700</a> / <a href="tel:044-67415800">044-67415800</a></p>

           </div>
        </div>
        <div  className="footer-second-section">
          <div className="footer-second-section-item">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg" alt="Become a Seller" width="13" height="12"></img>
            <a href=""><span>Become a Seller</span></a>
          </div>
          <div className="footer-second-section-item">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg" alt="Advertise" width="14" height="16"></img>
             <a href="" ><span>Advertise</span></a>
          </div>
          <div className="footer-second-section-item">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg" alt="Gift card" width="13" height="14"></img>
            <a href=""><span>Gift Cards</span></a>
          </div>
          <div className="footer-second-section-item">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg" alt="Help-center" width="13" height="13"></img>
            <a href=""><span>Help Center</span></a>
          </div>
          <span className="copyright-flipkart">
            © 2007-2025 <span>Flipkart.com</span>
          </span>
          <img className='payment-methods' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"/>
        </div>
    </div> 
  )
} 

export default Footerr
