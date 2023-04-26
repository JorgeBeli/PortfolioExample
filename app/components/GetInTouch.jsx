import Link from 'next/link'
import styles from './GetInTouch.module.css'

export default function GetInTouch () {
    return(
        <section className={styles.getInTouchContainer}>
            <h3>Interested in working with me?</h3>
            <p>I'm active in all social media plataforms listed below, but you can also send me an email and i will get back to you within 24-48 hours.</p>
            <Link href='/' className={styles.getInTouchButton}>Get in touch</Link>
        </section>
    )
}