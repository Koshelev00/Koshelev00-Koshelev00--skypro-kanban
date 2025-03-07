import "../../App.css";
// import { cardList } from "../../data.js";
import Card from "../Card/Card";
export default function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
        </div>
        <div className="cards">
          <div className="cards__item">
            {cards.map((card) => (
               <div className="cards__item" key={card.id}>
              <Card
                key={card.id}
                id={card.id}
                topic={card.topic}
                title={card.title}
                status={card.status}
                date={card.date}
              />
              </div>
            ))}
         
        </div>
      </div>
    </div>
  );
}
