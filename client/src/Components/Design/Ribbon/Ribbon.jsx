import React from 'react'
import './Ribbon.css'
const Ribbon = ({status}) => {
  return (
    <div className="ribbon-pop">{status}</div>
  )
}

export default Ribbon