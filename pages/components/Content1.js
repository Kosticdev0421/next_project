import styles from '../../styles/Home.module.css'

export default function Content1() {
    return (
        <div className={styles.content1}>
            <div className={styles.main_content1}>
                <div className={styles.left_content1}>
                    <div className={styles.top_left_content1}>
                        <h2>Hey Frederick, we’re back!</h2>
                        <p>The
                            <a> Brewers Association of Maryland </a>
                            returns to the Carroll Creek Linear<br /> Park in Frederick for the 2022 Maryland Craft Beer Festival! We’re thrilled<br /> to be gathering with you for this great festival and will comply with all<br /> federal, state, and local COVID-19 guidelines and restrictions.
                        </p>
                        <p>Festival entry includes beer samples from <strong>DOZENS OF MARYLAND BREWERIES&nbsp;</strong>(including a few breweries not yet open to the public!)<br /> pouring <strong>more than 200 unique, beers – all brewed in Maryland.</strong></p>
                        <p>In addition, there will be live music and a great selection of food and craft vendors throughout the festival.</p>
                    </div>
                    <div className={styles.bottom_left_content1}>
                        <h4>So soon we can taste it...</h4>
                        <div className={styles.time}>
                            <div className={styles.section}>
                                <p className={styles.value}>000</p>
                                <p className={styles.label}>Day(s)</p>
                            </div>
                            <p>:</p>
                            <div className={styles.section}>
                                <p className={styles.value}>00</p>
                                <p className={styles.label}>Hour(s)</p>
                            </div>
                            <p>:</p>
                            <div className={styles.section}>
                                <p className={styles.value}>00</p>
                                <p className={styles.label}>Minute(s)</p>
                            </div>
                            <p>:</p>
                            <div className={styles.section}>
                                <p className={styles.value}>00</p>
                                <p className={styles.label}>Second(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right_content1}>
                    <h2>Event Address</h2>
                    <h3>Carroll Creek Linear Park
                        <br />
                        44 South Market St, Frederick, MD 21701
                    </h3>
                    <p className={styles.event}>Event Hours</p>
                    <p className={styles.times}>
                        12:00-1:30 PM • Enthusiast Session
                        <br />
                        1:30-5:00 PM • General Tasting Session
                        <br />
                        Last Call 4:45pm • Rain or Shine
                    </p>
                    <p  className={styles.text}>Tickets are nonrefundable & only available in advance.</p>
                    <p  className={styles.text}>Valid, government-issued ID required for entry.</p>
                    <p  className={styles.text}>Proceeds of the Maryland Craft Beer Festival directly benefit the legislative<br /> and promotional efforts of the Brewers Association of Maryland and its<br /> member community.</p>
                </div>
            </div>
        </div >
    )
}