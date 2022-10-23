import './App.scss';
import Main from './components/Main/Main';
import MainState from './components/Main/MainState';
import Header from './components/Header/Header';
import {useContext} from 'react';
import {ThemeContext} from './components/common/ThemeContext/ThemeContext';




function App() {
    const {theme} = useContext(ThemeContext)

    return (
    <div className={`App${theme}`}>
            <Header/>
            <MainState>
                <Main/>
            </MainState>
    </div>
  );
}

export default App;
