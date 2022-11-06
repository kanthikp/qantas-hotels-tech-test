import styled from 'styled-components'
import { PropertyDetail } from '../../../types'
import HotelDetail from '../HotelDetail'
import HotelImage from '../HotelImage'
import HotelPricing from '../HotelPricing'

interface PropertyProps {
  propertyDetail: PropertyDetail
}
const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1em;
`
const HotelCard = ({ propertyDetail }: PropertyProps) => {
  return (
    <StyledDiv>
      <HotelImage
        previewImage={propertyDetail.property.previewImage}
        promotion={propertyDetail.offer.promotion}
      />
      <HotelDetail propertyDetail={propertyDetail} />
      <HotelPricing offer={propertyDetail.offer} />
    </StyledDiv>
  )
}

export default HotelCard
