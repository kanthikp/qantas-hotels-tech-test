import React from 'react'
import { deflate } from 'zlib'
import { PreviewImage, PropertyDetail } from '../../../types'

interface HotelOfferNameProps {
  offerName: string
}
const HotelOfferName = ({ offerName }: HotelOfferNameProps) => {
  return <p>{offerName}</p>
}

export default HotelOfferName
