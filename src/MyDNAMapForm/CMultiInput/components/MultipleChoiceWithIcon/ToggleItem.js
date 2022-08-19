import React from 'react'
import PropTypes from 'prop-types'
import '../../../myDNAForm_styles.css'
import { v4 as uuid } from 'uuid'
import getIconURL from "../../../hooks/utils";

// Icon imports end

const ToggleItem = (props) => {
  const { value, name, icon, selected, handleChange, required } = props
  const isSelected = selected.includes(value)
  const unique_id = uuid()

  return (
    <span className={'toggle-item'}>
      <input
        type={'checkbox'}
        label={value}
        className="btn-check"
        id={unique_id}
        required={required && !selected.length}
        color={isSelected ? 'primary' : 'secondary'}
        onClick={(event) => {
          handleChange(value)
        }}
      ></input>
      <label
        className={
          'btn  btn-circle btn-xl d-inline-flex ' +
          (!isSelected ? 'btn-radio-normal' : 'btn-radio-checked')
        }
        htmlFor={unique_id}
      >
        {
          <span >
            <img src={getIconURL(icon)} className={'icon-image'} alt={value} />
          </span>
        }
      </label>
      <h5 className={'icon-text'}>{name}</h5>
    </span>
  )
}
ToggleItem.propTypes = {
  /** number prop */
  value: PropTypes.string,
  /** string prop */
  name: PropTypes.string,

  /** function prop */
  handleChange: PropTypes.func,
  /** boolean value */
  selected: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
}
ToggleItem.defaultProps = {
  value: '',
  selected: false,
  name: 'default',

  handleChange: () => {},
}
export default ToggleItem
