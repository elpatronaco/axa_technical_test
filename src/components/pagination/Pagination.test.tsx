import React from 'react'
import Pagination from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Pagination Component', () => {
  it('Should have both buttons disabled when total items is 0', () => {
    render(<Pagination total={0} />)

    const leftArrow = screen.getByTestId('pagination-component-button-previous')
    const rightArrow = screen.getByTestId('pagination-component-button-next')

    expect(leftArrow).not.toHaveStyle(`cursor: pointer;`)
    expect(rightArrow).not.toHaveStyle(`cursor: pointer;`)
  })

  it('Should throw an error when passing down a negative page number', () => {
    expect(() => render(<Pagination total={10} page={-1} />)).toThrowError()
  })

  it('Should NOT go negative or above last page', async () => {
    render(<Pagination total={50} itemsPerPage={10} />)

    const leftArrow = screen.getByTestId('pagination-component-button-previous')
    const rightArrow = screen.getByTestId('pagination-component-button-next')
    const pagesLabel = screen.getByTestId('pagination-component-page')

    fireEvent.click(leftArrow)

    const label1 = pagesLabel.innerText

    for (let i = 0; i < 4; i++) fireEvent.click(rightArrow)

    const label2 = pagesLabel.innerText

    expect(label1).toBe('1 / 5')
    expect(label2).toBe('5 / 5')
  })
})
