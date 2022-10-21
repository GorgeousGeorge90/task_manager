import styles from './Header.module.scss'
import Switch from 'react-switch';
import {useContext} from 'react';
import {ThemeContext} from '../common/ThemeContext/ThemeContext';


const Header = () => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <header className={styles.header}>
            <div>
                <h1>Task manager</h1>
                <p>Make your work more effective!</p>
            </div>
            <div className={styles.btn}>
                <Switch onChange={toggleTheme} />
            </div>
        </header>
    )
}

export default Header