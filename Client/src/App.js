import "./App.css";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./views/About";
import { Form } from "./components/Form/Form";
import { Favorites } from "./components/Favorites/Favorites";
import Detail from "./components/Detail/Detail";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  function login({ email, password }) {
    const URL = "http://localhost:3001/rickandmorty/";
    axios(`${URL}login?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate("/cards");
      } 
    );
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const onSearch = (id) => {
    if (!id) alert("Enter an ID");
    if (characters.find((char) => char.id == id)) {
      alert(`The character with id ${id} already exists on the screen`);
      return;
    }
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [data, ...oldChars]);
        }
      })
      .catch((err) => alert(err.response.data.error));
  };

  function onClose(id) {
    setCharacters([...characters.filter((character) => character.id !== id)]);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Form login={login} />} />
        <Route
          path="/cards"
          element={
            <>
              <Nav onSearch={onSearch} logout={logout} />
              <Cards characters={characters} onClose={onClose} />
            </>
          }
        />
        <Route path="/fav" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
