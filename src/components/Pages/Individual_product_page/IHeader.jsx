import React from 'react'

const IHeader = () => {
  return (
    <div className='iheader-main'>
       <div>
        <div className="i-header-main-wrap">
            <div className="i-header-content">
                <a href="/Monitors" className='iback-button'><svg width="24" height="24" fill="none" viewBox="0 0 32 32">
                    <path d="M27 16H5M14 7l-9 9 9 9" stroke="#333333ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></a>
            </div>
            <div className="i-header-searchbar">
                <div className="i-searchicon">
                    <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M175.4 175.4 224 224"></path></svg>
                </div>
                <div className="i-searchtext">
                    Search for products
                </div>
            </div>
            <div className="i-cartarea">
                <div style={{height:"100%",width:"100%"}}> 
                    <div className="i-cart-content">
                        <div className="i-cart-imgwrapper">
                            <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default IHeader
