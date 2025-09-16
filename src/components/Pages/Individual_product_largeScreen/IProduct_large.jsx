import React from 'react'
import IProduct_largescreen_body from './IProduct_largescreen_body'
import Monitorheaderlarge from '../MonitorLarg/Monitorheaderlarge'
import Monitorlargedropdown_section from '../MonitorLarg/Monitorlargedropdown_section'
import Footerr from "../../../../src/components/Footerr"
const IProduct_large = () => {
  return (
    <div className='iproduct-laptop-screen'>
       <Monitorheaderlarge/>
           <Monitorlargedropdown_section/>
      <IProduct_largescreen_body/>
       <Footerr/>
    </div>
  )
}

export default IProduct_large
