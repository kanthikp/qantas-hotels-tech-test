import React from 'react'
import { deflate } from 'zlib'
import { PreviewImage, PropertyDetail, Rating } from '../../../types'

interface HotelRatingProps {
  rating: Rating
}
const HotelRating = ({ rating }: HotelRatingProps) => {
  return <p>{rating.ratingValue}</p>
}

export default HotelRating
