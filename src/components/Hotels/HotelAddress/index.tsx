interface HotelAddressProps {
  address: string[]
}
const HotelAddress = ({ address }: HotelAddressProps) => {
  return (
    <>
      {address.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default HotelAddress
