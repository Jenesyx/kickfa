import React from 'react'
import './QATemp.css'
import Icon from '../../Images/Icon.png'

function QATemp(props) {
  return (
    <>
        <div className='qa--holder'>
            <div className='question'>
                <img src={Icon} alt="" />
                <h2>{props.Question}</h2>
            </div>
            <div>
                <p>{props.Answer}</p>
            </div>
        </div>
    </>
  )
}

export default QATemp