interface HotelOfferNameProps {
  offerName: string
}
const HotelOfferName = ({ offerName }: HotelOfferNameProps) => {
  return <p>{offerName}</p>
}

export default HotelOfferName
