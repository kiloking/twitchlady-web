import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
  <footer className="footer">
    <div className="footerAbout">
      <h2>夢想方舟</h2>
      <p>夢想方舟 CG ARK 是由夢想動畫與西基電腦動畫合作成立的課程平台。</p>

    </div>
    <div className="footerAbout">
      <h2>與我們聯繫</h2>
      <p>高雄市前鎮區復興四路18號 <br />
      07-537-4941<br />
      cgarkacademy@gmail.com</p>
    </div>
    <div className="social">
      <div className="socialgroup">
        <a href="https://www.facebook.com/cgarkacademy" target="_blank"> <img src={process.env.PUBLIC_URL+'/images/icon-facebook.svg'} alt=""/> </a>
        {/* <Link to="mailto:cgarkacademy@gmail.com"> <img src={iconmail} alt=""/> </Link> */}
        {/* <a href="mailto:cgarkacademy@gmail.com"><img src={iconmail} alt=""/></a> */}
      </div>
      <div className="copyright">Copyright &copy; 2021 CG ARK</div>
      <Link to="/" className="logoWord" > <img src={process.env.PUBLIC_URL+'/images/cgark_logo.png'} alt=""/> </Link>
    </div>



  </footer>
  )
}

export default Footer
