import React from "react";
import "./ProductsTab.scss";

function ProductsTab() {
  return (
    <section className="products-tab">
      <div className="products-tab__container">
        <div className="products-tab__container__header">
          <h2>products</h2>
          <div className="products-tab__container__header__search">
            <div className="products-tab__container__header__search__input">
              <input type="text" placeholder="Search products" />
              <button>Search</button>
            </div>
            <div className="products-tab__container__header__search__filter">
              <select name="category" id="category">
                <option value="all">All</option>
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
              </select>
            </div>
          </div>
        </div>

        <div className="products-tab__content__body">
          <table className="products-tab__content__body__table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chicken Burger</td>
                <td>Burger</td>
                <td>$10</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Chicken Burger</td>
                <td>Burger</td>
                <td>$10</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Chicken Burger</td>
                <td>Burger</td>
                <td>$10</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Chicken Burger</td>
                <td>Burger</td>
                <td>$10</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Chicken Burger</td>
                <td>Burger</td>
                <td>$10</td>
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

export default ProductsTab;
