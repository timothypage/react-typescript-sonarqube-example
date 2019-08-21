import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import DieComponent from './Die'
import {render} from '@testing-library/react'

describe('Die', () => {
  it('should render', () => {
    const die = {sides: 8, value: 3}
    const {getByText} = render(
      <DieComponent {...die} />
    )

    expect(getByText("sides: 8")).toBeInTheDocument()

  })
})