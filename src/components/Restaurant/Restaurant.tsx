import "./Restaurant.scss";

function Restaurant() {
  return (
    <section className="restaurant">
      <div className="restaurant__container">
        <h2 className="restaurant__title">Our restaurant</h2>
        <h3 className="restaurant__subtitle">
          We offer a wide range of delicious meals from different restaurants
        </h3>
        <div className="restaurant__content">
          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/mexican_restaurant.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">Mexican TacoMex</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>

          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/japanesse_restaurant.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">Sushi Gold</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>

          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/italian_restaurant.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">Naples Pizza</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>

          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/chinesse_restaurant.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">Dragon Tower</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>

          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/japanesse_restaurant_2.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">Japan Food</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>

          <div className="restaurant__box">
            <div className="restaurant__image">
              <img
                src="/images/restaurant/chinesse_restaurant_2.jpg"
                alt="Restaurant"
              />
            </div>
            <div className="restaurant__info">
              <div className="restaurant__rating">
                <span className="restaurant__rating-icon">★</span>
                <span className="restaurant__rating-value">4.5</span>
              </div>
              <h3 className="restaurant__name">China Food</h3>
              <address className="restaurant__address">
                1234 Street Name, Casablanca
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Restaurant;
