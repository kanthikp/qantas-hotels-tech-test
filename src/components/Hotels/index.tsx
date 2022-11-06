import { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/data.json'
import Hotel from './HotelCard'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1em;
`
const Hotels = () => {
  const propertyDetailList = data.results
  const [sortOrder, setSortOrder] = useState(1)
  const options = [
    { id: 1, value: 'Price high-low' },
    { id: 2, value: 'Price low-high' },
  ]
  const compare = (a: number, b: number) => {
    return sortOrder === 2 ? a - b : b - a
  }

  return (
    <>
      <StyledContainer>
        <p>
          <strong>{`${propertyDetailList.length}`}</strong> <i>hotels in </i>
          <strong>Sydney</strong>.
        </p>
        <select
          onChange={(e) => {
            setSortOrder(+e.target.value)
          }}
        >
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id} selected={option.id === sortOrder}>
                {option.value}
              </option>
            )
          })}
        </select>
      </StyledContainer>
      {propertyDetailList
        .sort((a, b) => compare(a.offer.displayPrice.amount, b.offer.displayPrice.amount))
        .map((property) => {
          return <Hotel key={property.id} propertyDetail={property} />
        })}
    </>
  )
}

export default Hotels
