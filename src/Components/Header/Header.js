import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
        <nav className='wrap'>
            <header>
                <div className="right--side">
                    <ul>
                        <li><a href="@">صفحه اصلی</a></li>
                        <li><a href="@">حریم خصوصی</a></li>
                        <li><a href="@">تماس با ما</a></li>
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