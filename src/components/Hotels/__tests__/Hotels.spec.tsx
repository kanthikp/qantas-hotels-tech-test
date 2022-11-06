import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Hotels from '..'

describe('Hotels', () => {
  it('renders list of hotel ', () => {
    render(<Hotels />)
    const hotelListLength = screen.getByTestId('hotelListLength')
    expect(hotelListLength).toHaveTextContent('5')
  })

  it('sorts the hotel list price wise', async () => {
    render(<Hotels />)
    const sortSelect = screen.getByRole('combobox')
    // default sort order - high to low
    expect(sortSelect).toHaveValue('1')
    const priceListDesc = screen.getAllByTestId('displayPrice')

    // change sort order - low to high
    await fireEvent.change(sortSelect, { target: { value: '2' } })
    const priceListAsc = screen.getAllByTestId('displayPrice')

    //check if the hotel list has been sorted ascending
    for (let index = 0; index < priceListAsc.reverse().length; index++) {
      const element = priceListAsc.reverse()[index].nodeValue
      expect(priceListAsc.reverse()[index].nodeValue).toBe(priceListDesc[index].nodeValue)
    }
  })
})
