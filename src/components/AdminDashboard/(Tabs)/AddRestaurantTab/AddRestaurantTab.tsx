import "./AddRestaurantTab.scss";

function AddRestaurantTab() {
  return (
    <section className="add-restaurant-tab">
      <div className="add-restaurant-tab__container">
        <div className="add-restaurant-tab__container__header">
          <h1 className="add-restaurant-tab__container__header__title">
            Add Restaurant
          </h1>
        </div>
        <form className="add-restaurant-tab__container__form">
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Address" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="City" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="postal">Postal Code</label>
              <input type="text" id="postal" placeholder="Postal Code" />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="hours">Operating Hours (start)</label>
              <input type="time" id="hours-start" name="hours-start" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="hours">Operating Hours (end)</label>
              <input type="time" id="hours-end" name="hours-end" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" placeholder="Website" />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="image">Restaurant Image</label>
              <input type="file" id="image" />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="image">Restaurant Image Icon</label>
              <input type="file" id="image-icon" />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <button type="submit">Add Restaurant</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddRestaurantTab;
