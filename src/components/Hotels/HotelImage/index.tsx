import React from 'react'
import styled from 'styled-components'

import { PreviewImage, Promotion, PropertyDetail } from '../../../types'

interface HotelImageProps {
  previewImage: PreviewImage
  promotion: Promotion
}
const StyledImage = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  width: 145px;
  height: 125px;
`
const StyledText = styled.p<{ title: string }>`
  background-color: 'white';
  color: 'red';
  position: 'absolute';
  margin-left: '1px';
  padding: '5px';
  z-index: 999;
`

const HotelImage = ({ previewImage, promotion }: HotelImageProps) => {
  return (
    <StyledImage url={previewImage.url}>
      {/* <StyledText title={promotion.title} /> */}
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
