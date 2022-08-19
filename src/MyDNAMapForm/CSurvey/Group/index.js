import React from 'react'
import PropTypes from 'prop-types'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import QuestionList from '../QuestionList'

const Group = (props) => {
  const { group } = props
  const { label, questions } = group
  
  return (group &&
    <CCard>
      <CCardHeader className="section_header">
        {label && <div className="section_label">{label}</div>}
        {/* {icon && <CIcon>{icon}</CIcon>} */}
      </CCardHeader>
      <CCardBody>
        <QuestionList questions={Object.values(questions)} />
      </CCardBody>
    </CCard>
  )
}
Group.propTypes = {
  /** number prop */
  group: PropTypes.object,
 
}
Group.defaultProps = {
  group: null,
}
export default Group
