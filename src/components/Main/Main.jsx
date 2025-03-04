import '../../App.css'
import Column from '../Column/Column'

export default function Main() {
    return (
        <main className="main">
    <div className="container">
      
      <div className="main__block">
        <div className="main__content">

        <Column title="Без статуса"
          cardsData={[
            { title: "Заголовок 1", date: "06.01.2023", topic: "Research"},
            { title: "Заголовок 2", date: "04.01.2023" , topic: "Web design" }
        ]}/>
        <Column title="Нужно сделать"
           cardsData={[
            { title: "Заголовок 1", date: "02.01.2023", topic: "Web design" },
            { title: "Заголовок 2", date: "02.01.2023" }
        ]}
        />
          
        
        <Column title="В работе"
          cardsData={[
            { title: "Заголовок 1", date: "10.01.2023" , topic: "Research"},
            { title: "Заголовок 2", date: "03.01.2023" , topic: "Web design"}
        ]}/>
        <Column title="Тестирование"
          cardsData={[
            { title: "Заголовок 1", date: "01.01.2023" },
            { title: "Заголовок 2", date: "08.01.2023" , topic: "Research"}
        ]}/>
        <Column title="Готово"
          cardsData={[
            { title: "Заголовок 1", date: "09.01.2023" , topic: "Research"},
            { title: "Заголовок 2", date: "07.01.2023" }
        ]}/>
        
          
          
        </div>
      
      </div>
    </div>
  </main>
    )
}