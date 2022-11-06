import React from 'react'
import { deflate } from 'zlib'
import { PreviewImage, Promotion, PropertyDetail } from '../../../types'

interface HotelImageProps {
  previewImage: PreviewImage
  promotion: Promotion
}
const HotelImage = ({ previewImage, promotion }: HotelImageProps) => {
  return (
    <div>
      <img src={previewImage.url} alt={previewImage.caption} />
      <p>{promotion.title}</p>
    </div>
  )
}

export default HotelImage
