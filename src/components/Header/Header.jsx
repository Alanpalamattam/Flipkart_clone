import React from "react";
import "../styles/mobileheader.css";
const Header = () => {
  return (
    <div className="top">
      <header>
        <div className="leftside">
          <a href="" className="Threeline">
            <img
              alt="Menu"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
              width="24"
              height="24"
            ></img>
          </a>
          <div className="Fliplogo">
            <picture>
              <source
                srcset="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                width="160"
                height="40"
                media="(min-width:766px)"
              />
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
                alt=""
                width="160"
                height="40"
              />
            </picture> 
             <div>    
                
             </div>
          </div>
            <div>
    
             </div>
          <div className="searchbarlap">  
            <form type="submit" className="searchform">
              <div className="barwrapper">
                <button className="searchbut">
                  <svg
                    width="24"
                    height="24"
                    class
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                      stroke="#717478"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16 16L21 21"
                      stroke="#717478"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="searchspace">
                   <input
                    className="inputbox"  
                    placeholder="Search for Products, Brands and More"
                   />
                 </div>
              </div>  
            </form> 
           </div>
        </div>
        <div className="rightside">
          <div>
            <a href="" className="installicon">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE1NzBfODc5OTgpIj4KICAgIDxwYXRoIGQ9Ik0xOCAyMC4yNVYzLjc1QzE4IDIuOTIxNTcgMTcuMzI4NCAyLjI1IDE2LjUgMi4yNUw3LjUgMi4yNUM2LjY3MTU3IDIuMjUgNiAyLjkyMTU3IDYgMy43NUw2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NUgxNi41QzE3LjMyODQgMjEuNzUgMTggMjEuMDc4NCAxOCAyMC4yNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xMiAxMC4xMDU1TDEyIDE3LjYwNTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik05Ljc1IDE1LjM1NTVMMTIgMTcuNjA1NUwxNC4yNSAxNS4zNTU1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMTAuNSA0LjVIMTMuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE1NzBfODc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg=="
                width="24"
                height="24"
                alt="Get App"
              ></img>
            </a>
          </div>
          <div className="profilewrapp">
            <a href="" className="profilebutton">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                alt="Login"
                width="24"
                height="24"
              /> 
              <div className="logintext">Login</div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
                alt="Chevron"
                className="Logindownarrow"
                width="12"
                height="12"
              />
            </a> 
          </div>
          <div className="cartarea">
            <a href="" className="cartbutton">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt="Cart"
                width="24"
                height="24"
              />     
            </a>
            <div className="carttext">Cart</div>
          </div>
          <div className="marketwrapper"> 
            <a href="" className="marketbutton">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller"></img>
            </a>
            <div className="carttext">Become a Seller</div>
          </div>
          <div >     
            <div className="threedot">
                 <a href=""className="threedotatag">
                  <img class="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"></img>
                 </a>         
            </div>

          </div>
        </div>
      </header> 
    </div>
  );
};

export default Header;