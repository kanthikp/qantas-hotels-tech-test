import styled from 'styled-components'
import HotelAddress from '../HotelAddress'

interface HotelNameProps {
  name: string
  address: string[]
}

const StyledHeading = styled.p`
  white-space: nowrap;
  width: 16em;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: bold;
`
const HotelName = ({ name, address }: HotelNameProps) => {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <StyledHeading>{name}</StyledHeading>
      <HotelAddress address={address} />
    </div>
  )
}

export default HotelName
