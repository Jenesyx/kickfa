import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
        <nav>
            <header>
                <div className="right--side">
                    <ul>
                        <li>صفحه اصلی</li>
                        <li>حریم خصوصی</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
                <div className='left--side'>
                    <img src="#" alt="Logo" />
                </div>
            </header>
        </nav>
    </>
  )
}

export default Header