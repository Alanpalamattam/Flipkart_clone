import React from 'react'
import Headersection from './headersection/Headersection'
import Productdetails from './productdisplay/Productdetails'
import Sortparent from './productdisplay/Sortparent'

const Productfilterpage = () => {
  return (
    <div>
      <Sortparent/>
      <Productdetails/>
    </div>
  )
}

export default Productfilterpage
