import React from 'react'
import Monitor_productdisplay from './Monitor_productdisplay'
import Monitorfilter from './Monitorfilter'

const Monitorfiltersection = () => {
  return (
    <div  className='monitor-filter-main-wrap'>
      <div className="filterdisplay-main-flex">
       <Monitorfilter/>
      <Monitor_productdisplay/>
      </div>
    </div>
  ) 
}

export default Monitorfiltersection
