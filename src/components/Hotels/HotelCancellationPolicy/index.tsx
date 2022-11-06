import styled from 'styled-components'

interface HotelCancellationPolicyProps {
  policy?: string
}

const StyledText = styled.p`
  color: green;
`
const HotelCancellationPolicy = ({ policy }: HotelCancellationPolicyProps) => {
  return <>{policy ? <StyledText>Free cancellation</StyledText> : null}</>
}

export default HotelCancellationPolicy
