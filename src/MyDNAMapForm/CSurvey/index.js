import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import Section from './Section'

const CSurvey = (props) => {
  const { form, onSubmit, onClose, title, isReadOnly } = props
  const [section, setSection] = useState([])
  const formRef = useRef(null)
  const [viewFormModal,setViewFormModal] = useState(true);

  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (form) {
      setSection(Object.keys(form))
    }
  }, [form])

  const handleSubmit = (event) => {
    const eventForm = event.currentTarget
    if (eventForm.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    console.log(form)
    debugger
    setValidated(true)
    onSubmit(form)
    setViewFormModal(false)
  }

  return (
    <CModal visible={viewFormModal} size={'xl'} scrollable>
      <CModalHeader>
        <CModalTitle>{title?.toUpperCase()}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm id={'viewForm'} onSubmit={handleSubmit} validated={validated} ref={formRef}>
          {section.map((section, index) => {
            const sectionData = form[section]
            return <Section key={section} section={sectionData} />
          })}
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton className="btn btn-primary" onClick={() => setViewFormModal(false)}>
          Close
        </CButton>
        <CButton
          className="btn btn-primary"
          form={'viewForm'}
          type={'submit'}
          disabled={isReadOnly}
        >
          Submit
        </CButton>
      </CModalFooter>
    </CModal>
  )
}
CSurvey.propTypes = {
  template: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
}
CSurvey.defaultProps = {
  template: {},
  onSubmit: () => {},
  title: '',
  isReadOnly: false,
}
export default CSurvey
