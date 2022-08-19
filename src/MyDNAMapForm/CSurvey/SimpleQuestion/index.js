import React from 'react'
import PropTypes from 'prop-types'
import { CCol, CFormLabel, CRow } from '@coreui/react'
import CMultiInput from 'MyDNAMapForm/CMultiInput'

const SimpleQuestion = (props) => {
  const { question, onheader } = props
  const { label, type } = question
  if (!question) {
    return null
  }
  if (onheader) {
    return <CMultiInput question={question} {...props} />
  }
  return (
    <CRow className="input-row">
      <CCol className={'d-flex justify-content-between align-items-center'} xs={12}>
        {label &&
          (type === 'radio' ? (
            <div>
              <CFormLabel className={onheader ? 'question_label' : ''}>{label}</CFormLabel>
            </div>
          ) : (
            <CFormLabel className={onheader ? 'question_label' : ''}>{label}</CFormLabel>
          ))}

        <CMultiInput question={question} {...props} />
      </CCol>
    </CRow>
  )
}
SimpleQuestion.propTypes = {
  question: PropTypes.object,
  onheader: PropTypes.bool,
}
SimpleQuestion.defaultProps = {
  question: null,
  onheader: false,
}
export default SimpleQuestion
