import React from "react";
import "./UsersTab.scss";

function UsersTab() {
  return (
    <section className="users-tab">
      <div className="users-tab__container">
        <div className="users-tab__container__header">
          <h2>Users</h2>
          <div className="users-tab__container__header__search">
            <div className="users-tab__container__header__search__input">
              <input type="text" placeholder="Search users" />
              <button>Search</button>
            </div>
            <div className="users-tab__container__header__search__filter">
              <select name="role" id="role">
                <option value="all">All</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="users-tab__container__header__search__addUser">
              <button>Add User</button>
            </div>
          </div>
        </div>

        <div className="users-tab__content__body">
          <table className="users-tab__content__body__table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>jhon@gmail.com</td>
                <td>123456789</td>
                <td>Admin</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>jhon@gmail.com</td>
                <td>123456789</td>
                <td>User</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>jhon@gmail.com</td>
                <td>123456789</td>
                <td>User</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>jhon@gmail.com</td>
                <td>123456789</td>
                <td>User</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>jhon@gmail.com</td>
                <td>123456789</td>
                <td>User</td>
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

export default UsersTab;
