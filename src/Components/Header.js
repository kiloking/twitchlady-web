import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="herobg"  style={{backgroundImage: `url(${process.env.PUBLIC_URL+"/images/banner_new.png"})`}}></div>
      <div className="textContent">
          <div className="title">SCHOOL OF CG <br/>VFX & ANIMATION</div>
          <div className="subtitle">由台灣頂尖的動畫特效人才成立的創意學院，教授影像創作、影視製程、互動娛樂等領域的課程。</div>
          {/* <div className="loginbtn">課程登入</div> */}
        </div>
      
    </div>
  )
}

export default Header
