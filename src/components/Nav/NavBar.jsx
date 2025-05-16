import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.mainNav}>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
        <Link to="/auth">
          <h3>Login</h3>
        </Link>
        <Link to="/create">
          <h3>Create</h3>
        </Link>
      </nav>
    </>
  );
}
