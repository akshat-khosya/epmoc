import React from "react";

function TeamCard() {
  return (
    <div class="card">
      <div class="card__side card__side--front-1">
        <div class="card__title card__title--1">
          <i class="fas fa-paper-plane"></i>
          <h4 class="card__heading">Basic</h4>
        </div>

        <div class="card__details">
          <ul>
            <li>1 Website</li>
            <li>50 GB SSD Storage</li>
            <li>Unmetered Bandwidth</li>
            <li>Free SSL Certificate</li>
            <li>1 Included Domain</li>
            <li>1 Included Domain</li>
          </ul>
        </div>
      </div>
      <div class="card__side card__side--back card__side--back-1">
        <div class="card__cta">
          <div class="card__price-box">
            <p class="card__price-only">Only</p>
            <p class="card__price-value">$2.95/mo*</p>
          </div>
          <a href="#popup" class="btn btn--white">
            Select
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
