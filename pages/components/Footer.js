import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.main_footer}>
                <p>
                    Designed by 
                    <a href="https://www.elegantthemes.com"> Elegant Themes </a>
                     | Powered by 
                    <a href="https://www.wordpress.org"> WordPress</a>
                </p>
                <ul>
                    <li><a href="https://www.facebook.com/MdCraftBeerFestival/"></a></li>
                    <li><a href="https://twitter.com/MDBrewers"></a></li>
                </ul>
            </div>
        </div>
    )
}