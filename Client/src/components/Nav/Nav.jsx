import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";



function Nav({ onSearch, logout }) {
  
    return (
      <nav className={style.nav}>
        <Link to={"/"}>
          <img
            className={style.imgNav}
            src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
            alt="Logo-Rick-and-Morty"
          />
        </Link>
        <ul className={style.ulCont}>
          <Link to={"/"}>
            <li className={style.li}>Home</li>
          </Link>
          <Link to={"/about"}>
            <li className={style.li}>About</li>
          </Link>
          <Link to={"/fav"}>
            <li className={style.li}>Favorites</li>
          </Link>
          <button className={style.btnLogout} onClick={logout}>Log out</button>
        </ul>
        <SearchBar onSearch={onSearch} />
      </nav>
    );
}

export default Nav;
