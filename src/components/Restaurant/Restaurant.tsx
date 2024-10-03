import React from "react";
import "./Restaurant.scss";
import { restaurants } from "@/constants/index";
import Link from "next/link";

function Restaurant() {
  return (
    <section className="restaurant">
      <div className="restaurant__container">
        <h2 className="restaurant__title">Our restaurant</h2>
        <h3 className="restaurant__subtitle">
          We offer a wide range of delicious meals from different restaurants
        </h3>
        <div className="restaurant__content">
          {restaurants.map((restaurant) => (
            <Link
              href={`/restaurant/${restaurant.slug}`}
              className="restaurant__box"
              key={restaurant.slug}
            >
              <div className="restaurant__image">
                <img src={restaurant.imageIcon} alt={restaurant.name} />
              </div>
              <div className="restaurant__info">
                <div className="restaurant__rating">
                  <span className="restaurant__rating-icon">★</span>
                  <span className="restaurant__rating-value">
                    {restaurant.rating}
                  </span>
                </div>
                <h3 className="restaurant__name">{restaurant.name}</h3>
                <address className="restaurant__address">
                  {restaurant.address}
                </address>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Restaurant;
