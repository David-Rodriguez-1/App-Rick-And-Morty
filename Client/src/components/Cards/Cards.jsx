import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  const Character = characters.map(({ id,status, name, image }) => (
    <Card
      key={id}
      id={id}
      name={name}
      status={status}
      image={image}
      onClose={onClose} />
  ));

  return <section className={style.Cards}>{Character}</section>;
}
