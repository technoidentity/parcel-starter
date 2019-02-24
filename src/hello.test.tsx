import React from 'react'

import { render, cleanup } from 'react-testing-library'

import { Hello } from './Hello'

afterEach(cleanup)

describe('Hello', () => {
  it('renders "Hello"', () => {
    const { getByText } = render(<Hello />)
    getByText('Hello!')
  })
})
