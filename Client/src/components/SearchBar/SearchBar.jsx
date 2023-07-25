import style from "./SearchBar.module.css";
import { useState } from "react";
import { GiCardRandom } from "react-icons/gi";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  function random() {
    const randomId = Math.ceil(Math.random() * 826);
    props.onSearch(randomId);
  }

  return (
    <div className={style.navContain}>
      <form
        className={style.formSearch}
        action="post"
        method="post"
        onSubmit={handleChange}>
        <input
          placeholder="Add characters for ID"
          className={style.input}
          type="search"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />
      </form>
      <div className={style.containBtn}>
        
        <button className={style.btnAdd}>Add Character</button>

      <button
        className={style.btnRandom}
        onClick={() => {
          random();
        }}>
        <GiCardRandom className={style.logo} />
      </button>
          </div>
    </div>
  );
}
