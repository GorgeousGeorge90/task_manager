import {ThemeContext} from './ThemeContext';


const ThemeState = ({children}) => {

    return (
            <ThemeContext.Provider>
                {children}
            </ThemeContext.Provider>
    )
}

export default ThemeState