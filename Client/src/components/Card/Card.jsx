  import style from "./Card.module.css";
  import { Link } from "react-router-dom";
  import { connect } from "react-redux";
  import { addFav, removeFav } from "../../Redux/actions";
  import { useState, useEffect } from "react";

  export function Card({myFavorites, id, name, image, status, onClose, addFav, removeFav}) {
    // console.log(myFavorites);
    const [isFav, setIsFav] = useState(false);
    // console.log(isFav);
    
    
    useEffect(() => {
      myFavorites.forEach(charFav => {
        if (charFav.id === id) setIsFav(true);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myFavorites]);

    const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else {
        setIsFav(true);
        addFav({
          name,
          image,
          status,
          id
        });
      }
    };
    // useEffect(() => {
    //   props.myFavorites && props.myFavorites.forEach((fav) => {
    //     if (fav.id === props.id) {
    //       setIsFav(true);
    //     };
    //   });
    // },[props.id, props.myFavorites]);
    
    // claseDeH2 es una variable que pone estilos condicionales
    const claseDeH2 = name.length > 15 ? style.large : style.h2Card;
    
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
        <button className={style.button} onClick={() => onClose(id)}>
          X
        </button>
        <article className={style.article}>
          <div>
            <img className={style.imgCard} src={image} alt="" />
            <p className={style.status}>{status}</p>
          </div>
          <Link to={`/detail/${id}`} className={style.linkInfo}>
            <h2 className={claseDeH2}>{name}</h2>
          </Link>
        </article>
      </article>
    );
}
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      addFav: (character) => {
        dispatch(addFav(character));
      },
      removeFav: (id) => {
        dispatch(removeFav(id));
      },
    };
  };

  export const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(Card);