import React from "react";

function TeamCard() {
  return (
    <div class="card">
        <div class="card-front"></div>
        <div class="card-back">
            <h2>Jane Doe<br /><span>Senior Designer</span></h2>
            <div class="social-icons">
                <a href="#" class="fa fa-facebook" aria-hidden="true"></a>
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
