import './App.css';
import Main from './components/Main/Main';
import MainState from './components/Main/MainState';
import Header from './components/Header/Header';
import ThemeState from "./components/common/ThemeContext/ThemeState";


function App() {
  return (
    <div className="App">
        <ThemeState>
            <Header/>
            <MainState>
                <Main/>
            </MainState>
        </ThemeState>
    </div>
  );
}

export default App;
