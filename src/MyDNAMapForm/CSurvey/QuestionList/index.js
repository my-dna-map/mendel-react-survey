import React from 'react'
import PropTypes from 'prop-types'
import Question from '../Question'
import {  CRow } from '@coreui/react'
const QuestionList = (props) => {
  
  const { questions } = props
  
  if (questions?.length === 0) {
    return <></>
  }
  return (
    <CRow>
      {questions.map((question, index) => {
        return <Question key={`question.${index}`} question={question} />
      })}
    </CRow>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.array,
}

QuestionList.defaultProps = {
  questions: [],
}
export default QuestionList
