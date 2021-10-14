import React from 'react'

export const CheckBox = ({ id, handleCheckChieldElement, isChecked, value }) => {
    return (
      <li>
       <input key={id} onChange={handleCheckChieldElement} type="checkbox" checked={isChecked} value={value} /> {value}
      </li>
    )
}


export default CheckBox