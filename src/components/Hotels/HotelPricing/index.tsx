import React from 'react'
import { deflate } from 'zlib'
import { Offer, PreviewImage, PropertyDetail } from '../../../types'

interface HotelPricingProps {
  offer: Offer
}
const HotelPricing = ({ offer }: HotelPricingProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{`1 night total(${offer.displayPrice.currency})`}</p>
      <h1>${offer.displayPrice.amount}</h1>
      {offer.savings ? <h2>Save ${offer.savings.amount}~ </h2> : null}
    </div>
  )
}

export default HotelPricing
