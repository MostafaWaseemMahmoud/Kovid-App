import './App.css'
import Header from './compnents/Header/Header'
import Main from './compnents/main/Main'
import Prevention from './compnents/Prevention/Prevention'
import Symptoms from './compnents/Symptoms/Symptoms'
import Transmission from './compnents/Transmission/Transmission'

function App() {
    return(
        <div className="container">
            <Header />
            <Main />
            <Transmission />
            <Symptoms />
            <Prevention /> 
        </div>
    )
}

export default App
