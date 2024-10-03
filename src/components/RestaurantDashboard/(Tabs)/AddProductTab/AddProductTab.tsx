import React from "react";
import "./AddProductTab.scss";

function AddProductTab() {
  return (
    <section className="add-product">
      <div className="add-product__container">
        <div className="add-product__container__header">
          <h2 className="add-product__container__header__title">Add Product</h2>
        </div>
        <form className="add-product__container__form">
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="name">Product Name</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="add-product__container__form__group">
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
              </select>
            </div>
          </div>

          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                min={0}
                step="0.01"
              />
            </div>

            <div className="add-product__container__form__group">
              <label htmlFor="image">Image</label>
              <input type="file" id="image" name="image" />
            </div>
          </div>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description"></textarea>
            </div>
          </div>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <button type="submit">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProductTab;
