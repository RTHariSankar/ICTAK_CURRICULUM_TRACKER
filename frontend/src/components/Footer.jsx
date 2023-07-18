import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <div>
     <footer>
      <div className="container container-flex">
        <div className="icons">
           <TwitterIcon className='icons'/>
          < FacebookIcon className='icons'/>
           <InstagramIcon className='icons'/>
           <LinkedInIcon className='icons'/>
        </div>
        <div className="copyright">
          {/* <p>All rights reserved &copy</p> */}
          <p> copyright@2023 ICT Academy of Kerala</p>
        </div>
      </div>
          </footer>
    </div>
  )
}

export default Footer