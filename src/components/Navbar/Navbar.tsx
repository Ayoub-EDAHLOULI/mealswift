import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Image
            src="/images/icons/logo.png"
            alt="MealSwift"
            width={50}
            height={50}
          />
          <Link href="/">MealSwift </Link>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Link href="/signup">
            <button className="navbar__button">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
