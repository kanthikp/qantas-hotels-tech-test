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
const StyledPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
`
const StyledSavings = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: red;
`
const HotelPricing = ({ offer }: HotelPricingProps) => {
  return (
    <StyledContainer>
      <p>{`1 night total(${offer.displayPrice.currency})`}</p>
      <StyledPrice>${offer.displayPrice.amount}</StyledPrice>
      <StyledSavings>{offer.savings ? `Save $${offer.savings.amount}~` : null} </StyledSavings>
    </StyledContainer>
  )
}

export default HotelPricing
