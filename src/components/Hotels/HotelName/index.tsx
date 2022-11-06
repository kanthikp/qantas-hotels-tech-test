interface HotelNameProps {
  name: string
}
const HotelName = ({ name }: HotelNameProps) => {
  return <h1>{name}</h1>
}

export default HotelName
