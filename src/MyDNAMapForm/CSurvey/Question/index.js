import React from 'react'
import PropTypes from 'prop-types'
import ComplexQuestion from '../ComplexQuestion'
import SimpleQuestion from '../SimpleQuestion'
import { CCol } from '@coreui/react'

const Question = (props) => {
  const { question } = props
    
  return question.subgroup ? (
    <CCol xs={12}>
      <ComplexQuestion question={question} {...props} />
    </CCol>
  ) : (
    <CCol
      xs={12}
      lg={
        question.fullwidth ||
        (question.fullwidth === undefined &&
        (question.type === 'single_choice' ||
          question.type === 'multiple_choice' ||
          question.type === 'familiar' ||
          question.type === 'comment')
          ? true
          : question.fullwidth)
          ? 12
          : 6
      }
      className="radio-input"
    >
      <SimpleQuestion question={question} {...props} />
    </CCol>
  )
}
Question.propTypes = {
  question: PropTypes.object,
}
Question.defaultProps = {
  question: {},
}
export default Question
