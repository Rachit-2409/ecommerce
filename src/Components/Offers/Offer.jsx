import React from 'react';
import './Offer.css';
import offer from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>

      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Only on Best Seller Products</p>
        <button>Check Now !</button>
      </div>

      <div className="offer-right">
            <img src={offer} alt="image" />
      </div>

    </div>
  )
}

export default Offer
