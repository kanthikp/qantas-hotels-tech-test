import styled from 'styled-components'
import { Property, PropertyDetail } from '../../../types'
import HotelDetail from '../HotelDetail'
import HotelImage from '../HotelImage'
import HotelPricing from '../HotelPricing'

interface PropertyProps {
  propertyDetail: PropertyDetail
}
const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
const HotelCard = ({ propertyDetail }: PropertyProps) => {
  return (
    <StyledDiv>
      <div>
        <HotelImage
          previewImage={propertyDetail.property.previewImage}
          promotion={propertyDetail.offer.promotion}
        />
      </div>
      <div>
        <HotelDetail propertyDetail={propertyDetail} />
      </div>
      <div>
        <HotelPricing offer={propertyDetail.offer} />
      </div>
    </StyledDiv>
  )
}

export default HotelCard
