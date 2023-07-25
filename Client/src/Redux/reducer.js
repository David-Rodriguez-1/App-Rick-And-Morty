import { ADD_FAV, REMOVE_FAV } from "./actions_types";

const initialState = {
  myFavorites: [],
  allCharacter: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    default:
      return state;
  }
}

console.log(initialState.myFavorites);

export default reducer;

// import { ADD_FAV, REMOVE_FAV} from "./actions";

// const initialState = {
//   favorites: [],
//   allCharacters: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FAV:
//       return {
//         ...state,
//         myFavorites: action.payload,
//         allCharacters: action.payload
//       };
//     //   const addFavorites = [...state.allCharacters, payload];
//     // return {
//     //   ...state,
//     //   favorites: [...addFavorites],
//     //   allCharacters: [...addFavorites],
//     // }

//     case REMOVE_FAV:
//       return {
//         ...state,
//         myFavorites: action.payload
//       }
//       // const deleteFavorites = state.allCharacters.filter(
//       //   (e) => e.id !== payload
//       // );
//       // return {
//       //   ...state,
//       //   favorites: [...deleteFavorites],
//       //   allCharacters: [...deleteFavorites],

//     // case FILTER:
//     //   return {
//     //     ...state,
//     //     favorites: state.allCharacters.filter((e) => e.gender === payload),
//     //   };

//     // case ORDER:
//     //   let orderFavorites;
//     //   if (payload === "Ascendente") {
//     //     orderFavorites = state.favorites.sort((a, b) => (a.id > b.id ? 1 : -1));
//     //   } else {
//     //     orderFavorites = state.favorites.sort((a, b) => (a.id < b.id ? 1 : -1));
//     //   }
//     //   return {
//     //     ...state,
//     //     favorites: [...orderFavorites],
//     //   };

//     // case "RESET":
//     //   return {
//     //     ...state,
//     //     favorites: [...state.allCharacters],
//     //   };

//     default:
//       return { ...state };
//   }
// };

// console.log(initialState.favorites);
// console.log(initialState.allCharacters);

// export default reducer;
