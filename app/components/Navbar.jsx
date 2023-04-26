import Link from 'next/link'
import '../../styles/globals.css'
import styles from './Navbar.module.css'

export default function Navbar () {
    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
                <p>Johnathan Specter</p>
            </div>
            <div className={styles.navbarSections}>
                <ul>
                    <Link href='/'>Article</Link>
                    <Link href='/'>Chats</Link>
                    <Link href='/'>Awards</Link> 
                    <Link href='/'>About</Link>
                </ul>
            </div>
            <div className={styles.navbarButton}>
                <Link href='/'>Get in touch</Link>
            </div>
        </nav>
    )
}