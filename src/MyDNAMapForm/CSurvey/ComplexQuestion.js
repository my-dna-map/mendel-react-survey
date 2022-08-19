import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuestionList from './QuestionList'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import SimpleQuestion from './SimpleQuestion'

const ComplexQuestion = (props) => {
  const { question } = props
  const { subgroup } = question
  const [response, setResponse] = useState(question.response)
  const condition = subgroup._dependency
  
  const getQuestions = () => {
    let subgroupQuestions = []
    
    subgroupQuestions = Object.values(subgroup).filter((question) => {
      return typeof question === 'object'
    })
    return subgroupQuestions
  }

  if (!question) {
    return null
  }
  return (
    <CCard className="m-2">
      <CCardHeader className="p-0">
        <div className=" d-flex align-items-center justify-content-between">
          <h6 className={'m-0 p-3 font-weight-bold'}>{question.label.toUpperCase()}</h6>{' '}
          <SimpleQuestion question={question} onheader={true} onChange={setResponse} />
        </div>
      </CCardHeader>
      {response === condition && (
        <CCardBody>
          <QuestionList questions={getQuestions(subgroup)} {...props} />
        </CCardBody>
      )}
    </CCard>
  )
}
ComplexQuestion.propTypes = {
  question: PropTypes.object,
}
ComplexQuestion.defaultProps = {
  question: null,
}
export default ComplexQuestion
