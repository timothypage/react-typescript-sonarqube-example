import React from 'react'

import {Die} from './models'

const DieComponent: React.FC<Die> = ({sides, value}) => (
  <div className="die"> 
    <p>sides: {sides}</p>
    <p>value: {value}</p>
  </div>
)

export default DieComponent