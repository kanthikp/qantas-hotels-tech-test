import React from 'react'
import styled from 'styled-components'

import { PreviewImage, Promotion, PropertyDetail } from '../../../types'

interface HotelImageProps {
  previewImage: PreviewImage
  promotion: Promotion
}
const StyledImage = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  width: 170px;
  height: 170px;
`
const StyledText = styled.p`
  background-color: 'white';
  color: 'red';
  position: 'absolute';
  margin-left: '1px';
  padding: '5px';
`

const HotelImage = ({ previewImage, promotion }: HotelImageProps) => {
  return (
    <StyledImage url={previewImage.url}>
      {/* <StyledText>{promotion.title}</StyledText> */}
      <p
        style={{
          backgroundColor: 'white',
          color: 'red',
          position: 'absolute',
          marginLeft: '1px',
          padding: '5px',
        }}
      >
        {promotion.title}
      </p>
    </StyledImage>
  )
}

export default HotelImage
