import {ThemeContext} from './ThemeContext';
import {useState} from 'react';


const ThemeState = ({children}) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=> {
        if ( theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
    )
}

export default ThemeState