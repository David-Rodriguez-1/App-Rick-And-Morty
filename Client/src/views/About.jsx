import style from './About.module.css';
import { Link } from 'react-router-dom';




const About = () => {

    return (
      <>
        <Link to={"/"}>
          <img
            className={style.imgLogIn}
            src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
            alt="Logo-Rick-and-Morty"
          />
        </Link>
        <h1 className={style.h1}>Éste es el about!</h1>
        <Link to={"/login"}>
          <h5>Back</h5>
        </Link>
      </>
    );
}

export default About;