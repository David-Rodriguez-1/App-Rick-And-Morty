import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import { useState, useEffect } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      addFav({
        name: props.name,
        image: props.image,
        status: props.status,
        id: props.id,
      });
    }
  };
  useEffect(() => {
    props.favorites && props.favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      };
    });
  });
  
  const claseDeH2 = props.name.length > 15 ? style.large : style.h2Card;
  
  return (
    <article className={style.containerCard}>
      <div className={style.favorite}>
        {isFav ? (
          <button className={style.favBtn} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.favBtn} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
      <button className={style.button} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <article className={style.article}>
        <div>
          <img className={style.imgCard} src={props.image} alt="" />
          <p className={style.status}>{props.status}</p>
        </div>
        <Link to={"/detail"} className={style.linkInfo}>
          <h2 className={claseDeH2}>{props.name}</h2>
        </Link>
      </article>
    </article>
  );
}

export const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);