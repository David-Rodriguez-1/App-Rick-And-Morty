import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'

export default function Detail() {
  const { id } = useParams();
  console.log(id);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <main className={style.detailContainer}>
      <div className={style.cardContainer}>
        <div className={style.Card}>
          {character.image && (
            <img src={character.image} alt={character.name} />
          )}
          {character.name && (
            <p>
              <b>Name: </b>
              {character.name}
            </p>
          )}
          {character.status && (
            <p>
              <b>Status: </b>
              {character.status}
            </p>
          )}
          {character.species && (
            <p>
              <b>Species: </b>
              {character.species}
            </p>
          )}
          {character.gender && (
            <p>
              <b>Gender: </b>
              {character.gender}
            </p>
          )}
          {character.origin && (
            <p>
              <b>Origin: </b>
              {character.origin.name}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
