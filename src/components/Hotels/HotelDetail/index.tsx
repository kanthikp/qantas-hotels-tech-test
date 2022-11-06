import styled from 'styled-components'
import { PropertyDetail } from '../../../types'
import HotelAddress from '../HotelAddress'
import HotelCancellationPolicy from '../HotelCancellationPolicy'
import HotelName from '../HotelName'
import HotelOfferName from '../HotelOfferName'
import HotelRating from '../HotelRating'

interface HotelDetailProps {
  propertyDetail: PropertyDetail
}
const StyledContainer = styled.div`
  display: 'flex';
  flex-direction: 'column';
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 1em;
  border-top: 2px solid lightgray;
  min-width: 40em;
`
const HotelDetail = ({ propertyDetail }: HotelDetailProps) => {
  return (
    <StyledContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <HotelName
            name={propertyDetail.property.title}
            address={propertyDetail.property.address}
          />
          <HotelRating rating={propertyDetail.property.rating} />
        </div>
      </div>

      <HotelOfferName offerName={propertyDetail.offer.name} />
      <HotelCancellationPolicy policy={propertyDetail.offer.cancellationOption.cancellationType} />
    </StyledContainer>
  )
}

export default HotelDetail
