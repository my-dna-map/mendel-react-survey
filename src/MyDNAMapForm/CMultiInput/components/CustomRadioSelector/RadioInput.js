import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../../../myDNAForm_styles.css'
import {CButton, CForm, CFormInput} from '@coreui/react'
import {v4 as uuid} from 'uuid'
import {setIn} from "formik";

const RadioInput = (props) => {
    const {value, label, selected, onChange, name, required} = props

    const isSelected = selected === value
    const unique_id = uuid()
    return (
        <div className={!isSelected ? 'btn-radio-label-normal' : 'btn-radio-label-checked'}>
            {/* <CFormInput
        type="radio"
        name={name}
        required
        className={'btn-circle btn-xs ' + (!isSelected ? 'btn-radio-normal' : 'btn-radio-checked')}
        onClick={() => {
          onChange(value)
        }}
      />
      <label className={'radio-input-label-radio'}>{label}</label> */}

            <input
                type={'checkbox'}
                label={value}
                multiple={false}
                className="btn-check"
                id={unique_id}
                required={required}
                color={isSelected ? 'primary' : 'secondary'}
                onClick={(event) => {
                    onChange(value)

                }}
            />
            <label
                className={
                    'btn  btn-circle btn-xs d-inline-flex ' +
                    (!isSelected ? 'btn-radio-normal' : 'btn-radio-checked')
                }
                htmlFor={unique_id}
            >
                <span className="radio-input-label-radio">{label}</span>
            </label>
            {/* 
      </CFormInput> */}
        </div>
    )
}
RadioInput.propTypes = {
    /** number prop */
    value: PropTypes.string,
    /** string prop */
    label: PropTypes.string,
    /** boolean value */
    isValid: PropTypes.bool,
    /** function prop */
    onChange: PropTypes.func,
    /** boolean value */
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
RadioInput.defaultProps = {
    value: '',
    selected: '',
    label: 'default',
    isValid: false,
    onChange: () => {
    },
}
export default RadioInput
