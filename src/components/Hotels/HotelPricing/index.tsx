import styled from 'styled-components'
import { Offer } from '../../../types'

interface HotelPricingProps {
  offer: Offer
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-top: 2px solid lightgray;
`
const StyledNightCaption = styled.p`
  margin-top: 2.5em;
  margin-bottom: 0px;
`
const StyledPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.25em;
`
const StyledSavings = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: red;
  margin-top: 0;
`
const HotelPricing = ({ offer }: HotelPricingProps) => {
  return (
    <StyledContainer>
      <StyledNightCaption>{`1 night total(${offer.displayPrice.currency})`}</StyledNightCaption>
      <StyledPrice>${offer.displayPrice.amount}</StyledPrice>
      <StyledSavings>{offer.savings ? `Save $${offer.savings.amount}~` : null} </StyledSavings>
    </StyledContainer>
  )
}

export default HotelPricing
