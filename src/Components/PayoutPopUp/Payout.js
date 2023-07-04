import React from 'react'
import './Payout.css'

function Payout() {
  return (
    <>
      <div className='popup-holder'>
        <div className='popup'>
          <div className='inputs'>
            <h2>سابسکریپشن یک ماه</h2>
            <input type="text" />
            <input type="text" />
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
              <h3>مبلغ قابل پرداخت:<span>274,450</span>تومان</h3>
              <div className='buttons'>
                <div>خرید</div>
                <div>خروج</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payout