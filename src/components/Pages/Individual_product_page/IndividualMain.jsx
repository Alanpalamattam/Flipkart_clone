import React from 'react'
import "./Product_details_individual.css"
import IHeader from './IHeader'
import IBodysection from './IBodysection'
import IProduct_large from '../Individual_product_largeScreen/IProduct_large'
const IndividualMain = () => {
  return (
    <>
    <div className='i-product-details-main'>
      <IHeader/>
       <IBodysection/>
    </div>
    <IProduct_large/>
    </>
  )
}

export default IndividualMain
 