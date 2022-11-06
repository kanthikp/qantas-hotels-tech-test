interface HotelCancellationPolicyProps {
  policy?: string
}
const HotelCancellationPolicy = ({ policy }: HotelCancellationPolicyProps) => {
  return <>{policy ? <p>Free cancellation</p> : null}</>
}

export default HotelCancellationPolicy
