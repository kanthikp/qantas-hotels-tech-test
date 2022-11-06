import React, { useState } from 'react'
import { deflate } from 'zlib'
import data from '../../data/data.json'
import { PropertyDetail } from '../../types'
import Hotel from './HotelCard'

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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{`${propertyDetailList.length} hotels in Sydney.`}</p>
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
      </div>
      {propertyDetailList
        .sort((a, b) => compare(a.offer.displayPrice.amount, b.offer.displayPrice.amount))
        .map((property) => {
          return <Hotel key={property.id} propertyDetail={property} />
        })}
    </>
  )
}

export default Hotels
