import styled from 'styled-components'

interface HotelOfferNameProps {
  offerName: string
}
const StyledOffer = styled.p`
  color: red;
  text-decoration: underline;
`
const HotelOfferName = ({ offerName }: HotelOfferNameProps) => {
  return <StyledOffer>{offerName}</StyledOffer>
}

export default HotelOfferName
