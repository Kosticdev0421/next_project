import styles from '../../styles/Home.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.main_navbar}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src="http://www.mdcraftbeerfestival.com/wp-content/uploads/2020/01/BAM_FestLogo_Web_MD_Type_Color.png" alt="" />
                </div>
                <div className={styles.top_navbar}>
                    <ul>
                        <li className={styles.item1}>Home</li>
                        <li className={styles.item2}>Participating Breweries</li>
                        <li className={styles.item3}>Vendors</li>
                    </ul>
                </div>
                <div className={styles.mobile_navbar}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}