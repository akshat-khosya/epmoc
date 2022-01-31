import React from "react";
import './teamcard.css';
function TeamCard() {
  return (
    <div class="card">
        <div class="card-front">
          <img src="https://99px.ru/sstorage/56/2013/12/image_563012130153328414049.jpg" alt="" />
        </div>
        <div class="card-back">
            <h2>Jane Doe<br /><span>Senior Designer</span></h2>
            <div class="social-icons">
                <a href="#" class="fab fa-facebook" aria-hidden="true"></a>
                <a href="#" class="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" class="fa fa-google-plus" aria-hidden="true"></a>
                <a href="#" class="fa fa-linkedin" aria-hidden="true"></a>
                <a href="#" class="fa fa-instagram" aria-hidden="true"></a>
            </div>
        </div>
    </div>
  );
}

export default TeamCard;
