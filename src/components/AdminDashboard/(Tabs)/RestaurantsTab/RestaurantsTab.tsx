import "./RestaurantsTab.scss";

function RestaurantsTab() {
  return (
    <section className="users-tab">
      <div className="users-tab__container">
        <div className="users-tab__container__header">
          <h2>Restaurants</h2>
          <div className="users-tab__container__header__search">
            <div className="users-tab__container__header__search__input">
              <input type="text" placeholder="Search users" />
              <button type="button">Search</button>
            </div>

            <div className="users-tab__container__header__search__addUser">
              <button>Add Restaurant</button>
            </div>
          </div>
        </div>

        <div className="users-tab__content__body">
          <table className="users-tab__content__body__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mexican TacoMex</td>
                <td>mexicantacomex@gmail.com</td>
                <td>123456789</td>
                <td>
                  <address>1234 Main St</address>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Sushi Gold</td>
                <td>sushigold@gmail.com</td>
                <td>123456789</td>
                <td>
                  <address>1234 Main St</address>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Naples Pizza</td>
                <td>naplespizza@gmail.com</td>
                <td>123456789</td>
                <td>
                  <address>1234 Main St</address>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dragon Tower</td>
                <td>dragontower@gmail.com</td>
                <td>123456789</td>
                <td>
                  <address>1234 Main St</address>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dragon Tower</td>
                <td>dragontower@gmail.com</td>
                <td>123456789</td>
                <td>
                  <address>1234 Main St</address>
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RestaurantsTab;
