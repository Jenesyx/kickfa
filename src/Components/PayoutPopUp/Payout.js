import React from 'react'
import { useState } from 'react'
import './Payout.css'

function Payout(props) {

  const [buttonBuyMoves ,setButtonBuyMoves] = useState(false)
  const [buttonCloseMoves ,setButtonCloseMoves] = useState(false)

  const buttonMove = () => {
    setButtonBuyMoves(!buttonBuyMoves)
    setButtonCloseMoves(!buttonCloseMoves)
  }

  const closePopup = () => {
    props.setclickPayout(false); // Call the parent component function to set clickPayout to true
  };

  return (
    <>
      <div className={`popup-holder ${props.clickPayout ? 'hidden' : ''}`}>
        <div className='popup'>
          <div className='inputs--title'>
            <h3>سابسکریپشن یک ماه</h3>
            <div className='inputs'>
              <input type="text" placeholder='یوزرنیم کیک خودت!'/>
              <input type="text" placeholder='یوزرنیم کیک استریمر مورد نظر'/>
            </div>
          </div>
          <div className='info--payout'>
            <div className='popup-info'>
              <ul>
                <li>حمایت مستقیم از استریمر مورد علاقتون</li>
                <li>دریافت Emote های اختصاصی</li>
                <li>دریافت یا آپگرید Badge</li>
              </ul>
            </div>
            <div className='popup-payout'>
              <h4>مبلغ قابل پرداخت:<span>274,450</span>تومان</h4>
              <div className='buttons'>
                <div onMouseEnter={buttonMove} onMouseLeave={buttonMove} onClick={closePopup} className={`close-Btn ${buttonCloseMoves ? 'active' : ''}`}>خروج</div>
                <div className={`buy-Btn ${buttonBuyMoves ? 'active' : ''} `}>خرید</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payout