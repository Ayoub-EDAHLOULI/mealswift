import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/">MealSwift </a>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          <button className="navbar__button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
