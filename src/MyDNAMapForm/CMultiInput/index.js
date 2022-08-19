import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CFormInput, CFormSelect, CFormSwitch, CFormTextarea } from '@coreui/react'
import CustomRadioSelector from './components/CustomRadioSelector'
import MultipleChoiceWithIcon from './components/MultipleChoiceWithIcon'

const radio3Options = [
  {
    value: 'Si',
    label: 'Si',
  },
  {
    value: 'No',
    label: 'No',
  },
  { value: 'NS', label: 'NS' },
]

const radioOptions = [
  {
    value: 'Si',
    label: 'Si',
  },
  {
    value: 'No',
    label: 'No',
  },
]

const getFormattedDate = (date) => {
  if (!date) {
    return ''
  }
  let year = date.getFullYear()
  let month = (1 + date.getMonth()).toString().padStart(2, '0')
  let day = date.getDate().toString().padStart(2, '0')
  return year + '-' + month + '-' + day
}

const inputSwitch = (question, reactResponse, setReactResponse, componentRender) => {
  const { type } = question
  switch (type) {
    case 'checkbox':
      return (
        <CFormSwitch
          required={question.required || question.isRequired}
          value={reactResponse ? reactResponse : false}
          onChange={(event) => {
            question.response = event.target.value
            setReactResponse(event.target.value)
          }}
        />
      )
    case 'comment':
      return (
        <CFormTextarea
          type="text"
          placeholder={'Observaciones'}
          className={'input-format'}
          onChange={(event) => {
            question.response = event.target.value
            setReactResponse(event.target.value)
          }}
          value={reactResponse ? reactResponse : ''}
        />
      )

    case 'familiar':
      const options = [
        { value: 'madre', name: 'Madre', icon: 'madre' },
        { value: 'padre', name: 'Padre', icon: 'padre' },
        { value: 'hijo', name: 'Hijos', icon: 'hijo' },
        { value: 'hermano', name: 'Hermanos', icon: 'hermano' },
        { value: 'abuelos', name: 'Abuelos', icon: 'abuelos' },
        { value: 'otro', name: 'Otro', icon: 'otro' },
      ]

      return (
        <MultipleChoiceWithIcon
          options={options}
          col={{ xs: 6, md: 6, lg: 3 }}
          required={question.required || question.isRequired}
          value={reactResponse ? reactResponse : ''}
          onChange={(newVal) => {
            question.response = newVal
            setReactResponse(newVal)
          }}
        />
      )
    case 'date':
      return (
        <CFormInput
          feedbackInvalid={null}
          required={question.required || question.isRequired}
          type="date"
          defaultValue={question.response ? getFormattedDate(question.response) : ''}
          onChange={(event) => {
            question.response = event.target.valueAsDate
          }}
        />
      )
    case 'radio':
    case 'radio3':
      return (
        <CustomRadioSelector
          required={(question.required || question.isRequired) && !question.response}
          name={question.label}
          value={reactResponse ? reactResponse : ''}
          options={question.options ?? (type === 'radio' ? radioOptions : radio3Options)}
          onChange={(value) => {
            question.response = value
            setReactResponse(value)
          }}
        />
      )
    case 'select':
      return (
        <CFormSelect
          feedbackInvalid="Please select a valid state."
          required={true}
          value={reactResponse ? reactResponse : null}
          onChange={(event) => {
            question.response = event.target.value
            setReactResponse(event.target.value)
          }}
        >
          <option value="">Select an option</option>
          {question.options.map((option, index) => (
            <option key={`option.${index}`} value={option['value']}>
              {option['name']}
            </option>
          ))}
        </CFormSelect>
      )

    case 'single_choice':
      return (
        <MultipleChoiceWithIcon
          required={question.required || question.isRequired}
          value={reactResponse ? reactResponse : ''}
          onChange={(newVal) => {
            question.response = newVal
            setReactResponse(newVal)
          }}
          options={question.options}
          multiple={false}
        />
      )
    case 'multiple_choice':
      return (
        <MultipleChoiceWithIcon
          required={question.required || question.isRequired}
          value={reactResponse ? reactResponse : ''}
          onChange={(newVal) => {
            question.response = newVal
            setReactResponse(newVal)
          }}
          options={question.options}
          col={{ xs: 6, md: 6, lg: 3 }}
        />
      )
    case 'text':
      return (
        <CFormInput
          required={question.required || question.isRequired}
          type="text"
          feedbackInvalid={null}
          onChange={(event) => {
            question.response = event.target.value
          }}
        />
      )

    default:
      return (
        <CFormInput
          required
          feedbackInvalid={null}
          type="text"
          onChange={(event) => {
            question.response = event.target.value
          }}
        />
      )
  }
}

const CMultiInput = (props) => {
    
  const { question, onChange } = props
  const [reactResponse, setResponse] = useState(question.response)
    
  const setReactResponse = (value) => {
    onChange(value)
    setResponse(value)
  }
  return inputSwitch(question, reactResponse, setReactResponse)
}
CMultiInput.propTypes = {
  question: PropTypes.object,
  onChange: PropTypes.func,
}
CMultiInput.defaultProps = {
  question: null,
  onChange: () => {},
}
export default CMultiInput
