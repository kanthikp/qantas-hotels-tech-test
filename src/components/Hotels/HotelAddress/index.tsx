import styled from 'styled-components'

interface HotelAddressProps {
  address: string[]
}
const StyledAddress = styled.address`
  color: gray;
  text-decoration: none;
`
const HotelAddress = ({ address }: HotelAddressProps) => {
  return <StyledAddress>{address.join(', ')}</StyledAddress>
}

export default HotelAddress
