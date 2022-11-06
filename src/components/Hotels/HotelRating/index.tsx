import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalf, faCircle, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '../../../types'

interface HotelRatingProps {
  rating: Rating
}
const HotelRating = ({ rating }: HotelRatingProps) => {
  return (
    <div
      style={{
        marginTop: '1.5em',
        marginLeft: '1em',
        width: '6.5em',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FontAwesomeIcon
        icon={rating.ratingType === 'star' ? (faStar as IconProp) : (faCircle as IconProp)}
        color={rating.ratingValue >= 1 ? 'orange' : 'gray'}
      />
      <FontAwesomeIcon
        icon={rating.ratingType === 'star' ? (faStar as IconProp) : (faCircle as IconProp)}
        color={rating.ratingValue >= 2 ? 'orange' : 'gray'}
      />
      <FontAwesomeIcon
        icon={rating.ratingType === 'star' ? (faStar as IconProp) : (faCircle as IconProp)}
        color={rating.ratingValue >= 3 ? 'orange' : 'gray'}
      />
      <FontAwesomeIcon
        icon={rating.ratingType === 'star' ? (faStar as IconProp) : (faCircle as IconProp)}
        color={rating.ratingValue >= 4 ? 'orange' : 'gray'}
      />
      <FontAwesomeIcon
        icon={rating.ratingType === 'star' ? (faStar as IconProp) : (faCircle as IconProp)}
        color={rating.ratingValue >= 5 ? 'orange' : 'gray'}
      />
    </div>
  )
}

export default HotelRating
