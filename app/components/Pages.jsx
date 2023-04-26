import Link from 'next/link'
import styles from './Pages.module.css'

export default function Pages () {
    return(
        <section className={styles.pagesContainer}>
            <div>
                <img src="https://i.ibb.co/1XJRRx8/Spense.png" alt="Spence" />
                <Link href='/'>Spence.com →</Link>
                <p>Rethinking the way writers get paid, an open-source platform designed to help writer focus more on writing, and less and how they'll get paid. Project in collaboration with Codewell.cc</p>
            </div>
            <div>
                <img src="https://i.ibb.co/7CnpXHf/YelpCamp.png" alt="YelpCamp" />
                <Link href='/'>YelpCamp.com →</Link>
                <p>Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been crownd's favorite in 2021.</p>
            </div>
        </section>
    )
}