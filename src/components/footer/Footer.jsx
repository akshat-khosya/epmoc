import React from 'react';
import ReactDOM  from 'react-dom';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <h3 className='heading'>Contact us</h3>
            <div class="container">
           <div class="row">
               <div class="footer-col">
                   <ul>
                       <li><a href="https://instagram.com/epmoc_?utm_medium=copy_link"><i class="fab fa-instagram"></i> Instagram</a></li>
                   </ul>
               </div>
               <div class="footer-col">
                   <ul>
                       <li><a href="https://www.linkedin.com/company/epmoc-iiitu"><i class="fab fa-linkedin-in"></i> Linked In</a></li>
                   </ul>
               </div>
               <div class="footer-col">
                   <ul>
                       <li><a href="https://youtube.com/channel/UCzfmd-bK_mOP4rVMchaHGtw"><i class="fab fa-youtube"></i> You Tube</a></li>
                   </ul>
               </div>
               <div class="footer-col">
                   <ul>
                       <li><a href="mailto: epmoc@iiitu.ac.in"><i class="fas fa-envelope"></i> Email</a></li>
                   </ul>
               </div>
           </div>
       </div>
        </div>
    )
}

export default Footer