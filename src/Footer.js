 import { colors } from '@material-ui/core'
import React from 'react'
 import './Footer.css'
 
 export default function Footer() {
   return (
     <div>
       <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <img  className="brand" src="https://www.vhv.rs/dpng/d/284-2840045_cropped-once-upon-a-chai-glass-chai-clipart.png"/>
            <h3>ChaiShai</h3>
            <p> </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul style={{color:"white"}}>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Registered Office:, <br />
              Bhaveshwar Arcade Annexe LBS Marg,<br />
              Ghatkpar(W),Mumbai-400 086 <br />
              <strong>Phone:</strong> +91 9111111117<br />
              <strong>Email:</strong> info@ChaiShai.com<br />
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6  footer-newsletter">
            <h4>Our  </h4>
            <p> get ready for awsome test updates.</p>
            
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>ChaiShai</strong>. All Rights Reserved
      </div>
      <div class="credits">
         
        {/* All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage */}
       
      </div>
    </div>
  </footer>

       
     </div>
   )
 }
 