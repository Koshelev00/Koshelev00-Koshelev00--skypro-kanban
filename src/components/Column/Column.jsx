import '../../App.css'
import Card from '../Card/Card'
export default function Column(column) {
    return (
        <div className="main__column column">
                    <div className="column__title">
                      <p>{column.title}</p>
                    </div>
                    <div className="cards">
                      <div className="cards__item">
                      <Card title="Название задачи" date="30.10.23" />
                      </div>
                    </div>
                  </div>
    )
}