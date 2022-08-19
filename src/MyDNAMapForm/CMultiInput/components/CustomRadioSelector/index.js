import React, {useState} from 'react'
import PropTypes from 'prop-types'
import RadioInput from './RadioInput'
import { CFormInput } from '@coreui/react'
import {v4 as uuid} from "uuid";

const CustomRadioSelector = (props) => {
  const { value, onChange, options, required, name } = props
  const [internalRequired,setInternalRequired] = useState(required);
  const unique_id = uuid()
  return (
    <div className="custom-radio-input-block" >
      {options?.map((option, index) => {
        return (
          <RadioInput
            key={option.value}
            value={option.value}
            label={option.label}
            onChange={(newValue)=>{
              onChange(newValue)
            }}
            selected={value}
            required={required}
            name={unique_id}
          />
        )
      })}
    </div>
  )
}
CustomRadioSelector.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
CustomRadioSelector.defaultProps = {
  value: 0,
  isValid: false,
  onChange: () => {},
}
export default CustomRadioSelector
