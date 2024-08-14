import React from 'react';

const OffersPage = () => {
  return (
    <div className="offers-page">
      <header className="offers-header">
        <h1>Exclusive Offers</h1>
        <p>Grab these amazing deals before they’re gone!</p>
      </header>

      <section className="featured-offers">
        <h2>Featured Offers</h2> {/* Added title for the featured offers section */}
        <div className="offer-card">
          <div className="offer-image">
            <img src="path/to/apple-watch-image.jpg" alt="Apple Watch" />
          </div>
          <div className="offer-details">
            <h2>Apple Watch</h2>
            <p>Series 7</p>
            <p className="price">$219.78</p>
          </div>
        </div>
        <div className="offer-timer">
          <p>Ends in: <span className="timer">00:12:34</span></p>
        </div>
      </section>

      <section className="upcoming-offers">
        <h2>Upcoming Offers</h2>
        <div className="offer-cards">
          {/* Add upcoming offer cards here */}
        </div>
      </section>

      <footer className="offers-footer">
        <p>Terms & Conditions apply. Contact us for more details.</p>
      </footer>
    </div>
  );
};

export default OffersPage;
