import styles from './Text.module.css'

export default function Text () {
    return(
        <section className={styles.textContainer}>
            <div>
                <h3>A co-founder at one of the world's largest communities.</h3>
                <p>The combined experience I have working at the top Fortune 500 companies has allowed me to developer a skillset that helps me in not just development, but in every aspect of any business.</p>
                <p>I'm proud to annouce that I am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.</p>
            </div>
            <div className={styles.secondText}>
                <p>As a developer, you have everything available to you and all that's holding you back is yourself.</p>
                <p>A qoute I live by perfect illustrate what i mean.</p>
                <div>
                    <p>"How big you would you dream, if you <span className={styles.textSpan}>knew</span> you wouldn't fail?"</p>
                    <p>You've already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader in something you're <span className={styles.textSpan}>passionate</span> about.</p>
                </div>
                <p>I'm happy to chat over coffe some time about how I can help your company.</p>
            </div>
        </section>
    )
}