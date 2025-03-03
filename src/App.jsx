
import './App.css'
import Header from './components/Header/Header.jsx'
import PopNewCard from './components/PopNewCard/PopNewCard.jsx'
import PopBrowse from './components/PopBrowse/PopBrowse.jsx'
import Main from './components/Main/Main.jsx'
import PopExit from './components/popups/PopExit/PopExit.jsx'

export default function App() {
  return (
  <>
  <div className="wrapper">
    {/* <!-- pop-up start--> */}
  
    <PopExit/>

    <PopNewCard/>

    <PopBrowse/>
  
    {/* <!-- pop-up end--> */}

    <Header/>
    <Main/>
  
  </div>

  <script src="js/script.js"></script>
  </>
  )
}
