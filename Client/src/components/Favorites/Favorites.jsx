import Card from "../Card/Card";
import React from "react";
import { connect } from "react-redux";
// import { useRef } from "react";
// import {filterCards, orderCards } from "../../Redux/actions";

// const styleSelect = {
//   marginRight: "15px",
//   padding: "10px",
//   borderRadius: "5px",
// };
export function Favorites(props) {
  console.log(props);
  // const filter = useRef(null);
  // const order = useRef(null);

  // const dispatch = useDispatch();

  // function handleReset(e) {
  //   dispatch({ type: "RESET" });
  //   filter.current.value = "";
  //   order.current.value = "";
  // }

  return (
    <>
      {/* <select
        style={styleSelect}
        ref={order}
        onChange={(e) => dispatch(orderCards(e.target.value))}>
        {["", "Ascendente", "Descendente"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
      <select
        style={styleSelect}
        ref={filter}
        onChange={(e) => dispatch(filterCards(e.target.value))}>
        {["", "Male", "Female", "unknown", "Genderless"].map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select> */}

      {/* <button value="reset" onClick={handleReset}>
        Reset
      </button> */}
      <div>
        {
          props.myFavorites.map((e) => (
            <Card
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={false}
              key={e.id}
            />
          ))}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps)(Favorites)
