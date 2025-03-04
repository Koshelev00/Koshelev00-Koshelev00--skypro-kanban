import '../../App.css'
import Card from '../Card/Card'
export default function Column({ title, cardsData = [] }) {
    return (
        <div className="main__column column">
                    <div className="column__title">
                      <p>{title}</p>
                    </div>
                    <div className="cards">
                      <div className="cards__item">
                      {cardsData.map((card, index) => (
                    <div className="cards__item" key={index}>
                        <Card title={card.title} date={card.date} topic={card.topic}/>
                    </div>
                    ))}
                      </div>
                    </div>
                  </div>
    )
}