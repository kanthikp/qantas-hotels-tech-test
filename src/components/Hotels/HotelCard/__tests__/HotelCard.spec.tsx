import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import HotelCard from '..'

describe('HotelCard', () => {
  const propertyDetail = {
    id: 'mesq6mggyn',
    property: {
      propertyId: 'P107802',
      title: 'Primus Hotel Sydney',
      address: ['339 Pitt St', 'Sydney'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Primus Hotel Sydney',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe King',
      displayPrice: {
        amount: 375.0,
        currency: 'AUD',
      },
      savings: {
        amount: 28.0,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'FREE_CANCELLATION',
      },
    },
  }
  it('renders Hotel Details ', () => {
    const { container } = render(<HotelCard propertyDetail={propertyDetail} />)
    const hotelName = screen.getByText('Primus Hotel Sydney')
    expect(hotelName).toBeDefined()
    const hotelAddress = screen.getByText('339 Pitt St, Sydney')
    expect(hotelAddress).toBeDefined()
    const hotelOffer = screen.getByText('Deluxe King')
    expect(hotelOffer).toBeDefined()
    const hotelCancellation = screen.getByText('Free cancellation')
    expect(hotelCancellation).toBeDefined()
    const hotelRatings = container.querySelectorAll('svg[color="orange"]')
    expect(hotelRatings.length).toBe(5)
    const hotelDisplayPrice = screen.getByText('$375')
    expect(hotelDisplayPrice).toBeDefined()
    const hotelSavings = screen.getByText('Save $28~')
    expect(hotelSavings).toBeDefined()
  })
})
