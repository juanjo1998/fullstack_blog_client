import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      {/* logo */}
      <NavLink to="/" className="logo">
        BlogApp
      </NavLink>

      {/* nav */}
      <nav>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
    </header>
  );
};
