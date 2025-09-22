import React from 'react'
import Monitorheaderlarge from './Monitorheaderlarge'
import Monitorlargedropdown_section from './Monitorlargedropdown_section'
import Monitorfiltersection from './MonitorFilter/Monitorfiltersection'

const MonitorLarge = () => {
  return (
    <div className='MonitorfilterLarge'>
      <Monitorheaderlarge/>
      <Monitorlargedropdown_section/>
      <Monitorfiltersection/>
    </div>
  )
} 
  
export default MonitorLarge
