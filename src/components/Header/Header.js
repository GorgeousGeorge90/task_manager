import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1>Task manager</h1>
                <p>Make your work more effective!</p>
            </div>
        </header>
    )
}

export default Header