import React from 'react'
import './App.css'
import CSurvey from 'MyDNAMapForm/CSurvey'
import InformedConsent from './toDelete/FamilyMedicalForm'
import { CContainer } from '@coreui/react'
import './styles/styles.scss'

window.REACT_APP_ICON_URL = 'http://192.168.1.4/api/mendel/v1/from-icons/'
function App() {
  const title = InformedConsent?.form ? Object.keys(InformedConsent.form)[0] : ''

  return (
    <div className="App">
      <CContainer>
        <CSurvey form={InformedConsent?.form} title={title} />
      </CContainer>
    </div>
  )
}

export default App
