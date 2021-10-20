import { useState } from 'react'

export const checkBox = ({initialState, id, onChange}) => {
const [checked, setChecked] = useState(initialState);
const onClick=(checked)=>{
    setChecked(checked);
    onChange(id, checked);
   }
    return (
        <input
        type="checkbox"
        onClick={e => onClick(e.target.checked)}
        checked={checked}
      />
    )
}
