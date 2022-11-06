import React from 'react'
import { deflate } from 'zlib'
import { PreviewImage, PropertyDetail } from '../../../types'

interface HotelNameProps {
  name: string
}
const HotelName = ({ name }: HotelNameProps) => {
  return <h1>{name}</h1>
}

export default HotelName
