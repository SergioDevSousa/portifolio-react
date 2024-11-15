import styles from './Header.module.css';

function Header(){
    return(
        
        <header className={styles.cabecalho}>
                <a href="#">
                    <h1 className={styles.logo}>SS</h1>
                </a>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <a href="#projetos">Repo GitHub</a>
                        </li>
                    </ul>
                </nav>
        </header>
    
    );
    
}

export default Header;
