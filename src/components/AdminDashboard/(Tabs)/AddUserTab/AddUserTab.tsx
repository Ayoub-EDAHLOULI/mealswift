import "./AddUserTab.scss";

function AddUserTab() {
  return (
    <section className="add-user-tab">
      <div className="add-user-tab__container">
        <div className="add-user-tab__container__header">
          <h1 className="add-user-tab__container__header__title">Add User</h1>
        </div>
        <form className="add-user-tab__container__form">
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
          </div>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Address" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="City" />
            </div>
          </div>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="postal">Postal Code</label>
              <input type="text" id="postal" placeholder="Postal Code" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="role">Role</label>
              <select id="role">
                <option value="admin">Admin</option>
                <option value="restaurant-admin">Restaurant Admin</option>
                <option value="driver">Driver</option>
              </select>
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" />
            </div>
          </div>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <button type="submit">Add User</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddUserTab;
