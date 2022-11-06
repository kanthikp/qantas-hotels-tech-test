import React from 'react'
import { deflate } from 'zlib'
import { PreviewImage, Property, PropertyDetail } from '../../../types'
import HotelAddress from '../HotelAddress'
import HotelCancellationPolicy from '../HotelCancellationPolicy'
import HotelName from '../HotelName'
import HotelOfferName from '../HotelOfferName'
import HotelRating from '../HotelRating'

interface HotelDetailProps {
  propertyDetail: PropertyDetail
}
const HotelDetail = ({ propertyDetail }: HotelDetailProps) => {
  return (
    <div>
      <HotelName name={propertyDetail.property.title} />
      <HotelAddress address={propertyDetail.property.address} />
      <HotelRating rating={propertyDetail.property.rating} />
      <HotelOfferName offerName={propertyDetail.offer.name} />
      <HotelCancellationPolicy policy={propertyDetail.offer.cancellationOption.cancellationType} />
    </div>
  )
}

export default HotelDetail
