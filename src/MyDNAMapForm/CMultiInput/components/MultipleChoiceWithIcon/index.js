import React from 'react'
import PropTypes from 'prop-types'
import ToggleItem from './ToggleItem'
import { CCol, CRow } from '@coreui/react'

const MultipleChoiceWithIcon = (props) => {
  const { options, onChange, value, multiple, required } = props

  const handleChange = (newValue) => {
    if (multiple) {
      const newSelected = [...value]
      if (value.includes(newValue)) {
        newSelected.splice(newSelected.indexOf(newValue), 1)
      } else {
        newSelected.push(newValue)
      }
      onChange(newSelected)
    } else {
      onChange(newValue)
    }
  }

  return (
    <CRow className="multiple-choice-icon-container" {...props}>
      {options.map((option, index) => {
        return (
          <CCol {...props.col} key={option.value || option + '_' + index}>
            <ToggleItem
              value={option.value || option}
              selected={value}
              name={option.name || option}
              icon={option.icon}
              handleChange={handleChange}
              required={required}
            />
          </CCol>
        )
      })}
    </CRow>
  )
}
MultipleChoiceWithIcon.propTypes = {
  /** number prop */
  value: PropTypes.array,
  /** string prop */
  multiple: PropTypes.bool,
}
MultipleChoiceWithIcon.defaultProps = {
  value: [],
  multiple: true,
}
export default MultipleChoiceWithIcon
