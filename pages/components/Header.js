import styles from '../../styles/Home.module.css'

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.main_header}>
                <div className={styles.header_content}>
                    <div className={styles.hc_image}>
                        <img src="https://www.mdcraftbeerfestival.com/wp-content/uploads/2020/01/cropped-BAM_FestLogo_Web_MD_GlassType_Color-1-300x300.png" alt="" />
                    </div>
                    <div className={styles.hc_text}>
                        <h2>Saturday, May 14, 2022</h2>
                        <h3>12 – 5 PM • Frederick, Maryland</h3>
                    </div>
                    <div className={styles.hc_button}>
                        <a>GET YOUR PASSES HERE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}