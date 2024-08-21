import React from 'react'
import AdmissionLetter from '../assets/admission.pdf'
import FormFour from '../assets/f4-fee.docx'
import FormThree from '../assets/f3-fee.docx'
import FormTwo from '../assets/f2-fee.docx'


function Resources() {
  return (
    <>
    <div className="resources">
 <ol>
  <li><a href={AdmissionLetter}>FORM 1 ADMISSION LETTER</a></li>
          <br />
          <li><a href="#">FORM 1 RESOURCES</a></li>
          <br />
          <li><a href={FormTwo}>FORM 2 RESOURCES</a></li>
         <br />
          <li><a href={FormThree}>FORM 3 RESOURCES</a></li>
          <br />
          <li><a href={FormFour}>FORM 4 RESOURCES</a></li>
         <br />
        </ol>
        </div>
    </>
  )
}

export default Resources