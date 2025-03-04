import '../../App.css'
import Column from '../Column/Column'
import Card from '../Card/Card'

export default function Main() {
    return (
        <main className="main">
    <div className="container">
      
      <div className="main__block">
        <div className="main__content">

        <Column title="Без статуса"/>
        <Column title="Нужно сделать" Card={Card.title}/>
        <Column title="В работе"/>
        <Column title="Тестирование"/>
        <Column title="Готово"/>
        
          {/* <div className="main__column column">
            <div className="column__title">
              <p>Без статуса</p>
            </div>
            <div className="cards">
              <div className="cards__item">
              <Card/>
              </div>
            </div>
          </div>						
          <div className="main__column">
            <div className="column__title">
              <p>Нужно сделать</p>
            </div>
            <div className="cards">
              <div className="cards__item">
              <Card/>
              </div>
            </div>
          </div>
          <div className="main__column">
            <div className="column__title">
              <p>В работе</p>
            </div>
            <div className="cards">
              <div className="cards__item">
              <Card/>
              </div>
          
              
            </div>
          </div>
          <div className="main__column">
            <div className="column__title">
              <p>Тестирование</p>
            </div>
            <div className="cards">
              <div className="cards__item">
              <Card/>
              </div>
            </div>
          </div>
          <div className="main__column">
            <div className="column__title">
              <p>Готово</p>
            </div>
            <div className="cards">
              <div className="cards__item">
              <Card/>
              </div>
            </div>
          </div> */}
      
          
        </div>
      
      </div>
    </div>
  </main>
    )
}