import { Link } from "react-router-dom";
import style from "./Form.module.css";
import imgAtardecer from "./img-Rick-and-Morty-atardecer.jpg";
import { useState } from "react";
import { validate } from "./validates";



export const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(validate({ ...userData, [event.target.name]: event.target.value }));
  }

  const submit = (event) => {
    event.preventDefault();
    login(userData)
  }
  return (
    <>
      <Link to={"/"}>
        <img
          className={style.imgLogIn}
          src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
          alt="Logo-Rick-and-Morty"
        />
      </Link>
      <img className={style.imgAtardecer} src={imgAtardecer} alt="" />
        <Link to={"/about"}>
          <button className={style.btnAbout}>About</button>
        </Link>
        <Link to={"/forms"}>
          <span className={style.signUp}>Sign Up</span>
        </Link>
      <form className={style.form} onSubmit={submit}>
        <h2 className={style.h2Form}>Log In</h2>
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="texto"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <p>{errors.email}</p>
        <label htmlFor="password">
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <p>{errors.password}</p>
        <button className={style.btnSubmit}>Submit</button>
        <Link to={"/"} className={style.btnBack}>
          Back
        </Link>
      </form>
    </>
  );
};
