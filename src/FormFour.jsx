import React from 'react'
import SchoolFee from './assets/f4-fee.docx'
import App from './App'

function FormFour() {
  return (
    <>
<App />
<div id="link">
<a href={SchoolFee} download="Form 4 school fees structure">Download Form 4 fees structure</a>
</div>
    </>
  )
}

export default FormFour